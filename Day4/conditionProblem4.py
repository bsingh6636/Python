a=int(input("Enter 1st Number"))
b=int(input("Enter 2nd Number"))
c=int(input("Enter 3rd Number"))

if(a>b>c):
    print(f"{a} number is biggest")
elif(b>c):
    print(f"{b} is the biggest number")
else:
    print(f"{c} is the biggest number")
