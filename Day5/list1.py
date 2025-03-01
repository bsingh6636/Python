# listed = [ 1 ,2 ,3 ,4 ,4 ,5 ,5, 6 ]
# listed.sort()
# print(listed)

# listed =( 1 ,2 ,3 ,4 ,4 ,5 ,5, 6 )
# listed[9] = 15
# print(listed[9])

# def countWord(sentence):
#     new_Dict = {}
#     words = sentence.split()
#     for words in words:
#         if words in new_Dict:
#             new_Dict[words] += 1
#         else :
#             new_Dict[words] = 1
#     return new_Dict


# sentence = input('Enter a sentence ')
# result = countWord(sentence)
# print(result)

new_DIct = {
    'name' : 'Brijesh',
    'age'  : 24,

}
old_Dict = {
    'school' : 'New Vision',
    }

for key in new_DIct:
    old_Dict[key] = new_DIct[key]

for key , value in old_Dict.items():
    new_DIct[key] = value

print(old_Dict , new_DIct)