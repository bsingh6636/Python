

#palindrome check

# string = 'appa'
# reversedString = string[::-1]
# print(string == reversedString)


#character count
name = 'Brijesh Kumar Kushwaha'

dict = {

}

for letter in name :
    if letter in dict :
        dict[letter] += 1
    else:
        dict[letter] = 1  

print(dict)
  