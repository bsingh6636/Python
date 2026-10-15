from fastapi import FastAPI , HTTPException , status
from pydantic import BaseModel , Field

app = FastAPI()

transactions = {}

class WebhookPayload(BaseModel):
    event_id : str
    transaction_id : str
    amount : float = Field(gt=0)

@app.get("/health")
async def health() :
    return { "status" : "healthiest" }


@app.post("/webhooks", status_code = status.HTTP_202_ACCEPTED)
async def receive_webhook( payload : WebhookPayload ) :
    transactions[payload.transaction_id] = {
        "event_id" : payload.event_id,
        "amount"   : payload.amount,
        "status"   : "pending"
    }

    return {
        "transaction_id" : payload.transaction_id ,
        "status" : "pending" 
    }

@app.get('/transaction/{transaction_id}')
async def get_transaction( transaction_id : str ):
    transaction = transactions.get(transaction_id)

    if transaction is None :
        raise HTTPException(
            status_code = 404,
            detail = "Transaction not found"
        )

    return transaction 