# def nTriangle(n:int) ->None:
#     count = 1
#     for i in range (n):
#         number = 1
#         for j in range (count):
#             print(f"{number}", end=" ")
#             number += 1
#         count += 1
#         print()
        
#     pass

# nTriangle(5)

# output:
# 1 
# 1 2 
# 1 2 3 
# 1 2 3 4 
# 1 2 3 4 5 



# def triangle( n:int) ->None:
#     # Write your solution here.
#     count = 1
#     while( count <= n ):
#         for i in range(count):
#             print(f"{count}", end=' ')
#         print()
#         count += 1
#     pass

# triangle(5)
# output:
# 1 
# 2 2 
# 3 3 3 
# 4 4 4 4 
# 5 5 5 5 5 



# def seeding(n: int) -> None:
#     while(n > 0):
#         for i in range (n):
#             print('*',end=' ')
#         n -= 1
#         print()
#     pass

# seeding(5)
# output:
# * * * * * 
# * * * * 
# * * * 
# * * 
# * 



# def nNumberTriangle(n: int) -> None:
#     count = 1
#     while(n > 0):
#         for i in range(n):
#             print(f'{count}', end=' ')
#             count += 1
#         n -=1
#         print()
#         count = 1
#     pass

# nNumberTriangle(6)
# output :
# 1 2 3 4 5 6 
# 1 2 3 4 5 
# 1 2 3 4 
# 1 2 3 
# 1 2 
# 1



# def nStarTriangle(n: int) -> None:
#     # Write your code here.
#     count = 1
#     totalStar = n + n-1
#     while(count <= n):
#         star = count + count - 1
#         for i in range ((totalStar-star)//2):
#             print(' ',end='')
#         for i in range(star):
#             print('*',end='')
#         for i in range ((totalStar-star)//2):
#             print(' ',end='')
#         count += 1
#         print()
        
#     pass

# nStarTriangle(5)
# output:
#     *    
#    ***   
#   *****  
#  ******* 
# *********



# def nStarTriangle(n: int) -> None:
#     sppace = 0
#     for i in range (n , 0 , -1 ) :
#         space =' ' * sppace
#         star = '*' * ( 2 * i - 1 ) 
#         print(space + star )
#         sppace += 1
#     pass

# nStarTriangle(6)
# ***********
#  *********
#   *******
#    *****
#     ***
#      *


def nStarDiamond(n: int) -> None:
    # Write your code here.
    sppace = n - 1
    for i in range (1 , n + 1):
        star = '*' * ((2 * i)-1)
        space = ' ' * sppace
        print(space + star)
        sppace -= 1
    sppace = 0
    for i in range (n , 0 , -1):
        space = ' ' * sppace
        start = '*' * ((2 * i) -1 )
        print(space + start)
        sppace += 1
        
    pass

nStarDiamond(7)