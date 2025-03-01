reversedString = ''
def reverseString(string):
    global reversedString
    for char in string:
        reversedString = char + reversedString

string = input('Enter a string to reverse ')

reverseString(string)
print(reversedString)   

