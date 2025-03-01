# list = [ 1 ,2 , 3  ]
# sum = 0
# for num in list :
#     sum += num

# average = sum / len(list)

# print(f"Sum of list is {sum} and average is {average}")


#removing duplicates in list
listed = [ 1 ,2 ,3 ,4 ,4 ,5 ,5, 6 ]
uniqueList = []
for num in listed:
    if num not in uniqueList:
        uniqueList.append(num)

uniqueListSet = list(set(listed))

print(f"Unique list by loop {uniqueList} , unique list bu set {uniqueListSet}")
