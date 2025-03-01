name = "Cauliflower"

# reverse
# print(name[::-1])

vowel = [ 'a' , 'e' , 'i' , 'o' , 'u' ]

count = 0


for i in range( 0 , len(name) ):
    if name[i] in vowel:
        count += 1

# print(count)

sentence = 'My name is Brijesh Kumar Kushwaha'

# print(sentence.split())

words = sentence.split()

for words in words:
    print(words)
