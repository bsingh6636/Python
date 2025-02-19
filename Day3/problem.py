def maximum(a, b, c):
    return a if a > b and a > c else (b if b > c else c)

max = maximum(20 , 21 ,20)
print(max)