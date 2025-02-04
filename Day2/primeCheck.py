number = int(input("Enter a number : "))

isPrime = True

for i in range (2 , number // 2 + 1):
    if(number % i == 0):
        isPrime = False
        break

if isPrime:
    print("Your Number is Prime")
else:
    print("Your Number is not prime")