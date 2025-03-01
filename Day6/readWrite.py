
with open("/Users/brijesh/Documents/Brijesh/Python/Day6/sample.txt", "r") as file:
    content = file.read()
    print(content)


with open("/Users/brijesh/Documents/Brijesh/Python/Day6/sample.txt", "a") as file:
    file.write('\n Changed to Pankaj SIngh')
    file.write('\n Changed to Brijesh BB Brijesh')
