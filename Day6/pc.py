


# with open ('/Users/brijesh/Documents/Brijesh/Python/Day6/sample.txt' , 'a') as file:
#     file.write('added to Pankaj')

# with open ('/Users/brijesh/Documents/Brijesh/Python/Day6/sample.txt', 'r') as file:
#     content = file.read()
#     print(content)


try:
    with open ('sample.txt' , 'a') as file:
        file.write('added to Pankaj')
except Exception as e:
    print(f'Erorr is {e}')
finally:
    print('Erroc occured')