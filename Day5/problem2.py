p1="Make a lot of money"
p2="Buy Now"
p3="click this"
p4="Subscribe this"

message=input("Enter your comment: ")

if((p1 in message) or (p2 in message) or (p3 in message) or (p4 in message) ):
    print('Potenetial risk found')
else:
    print("Safe comment")