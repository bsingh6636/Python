marks1=int(input("Enter Marks 1 "))
marks2=int(input("Enter Marks 2 "))
marks3=int(input("Enter Marks 3 "))

total_percentage=((marks1+marks2+marks3)/300)*100
if(total_percentage>=40):
    print(f"You are pass with percentage {total_percentage}")
else:
    print("You are fail")