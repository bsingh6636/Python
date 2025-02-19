def sumRecursion(n):
    if n == 0 :
        return 0
    else :
        return n % 10 + sumRecursion(n // 10)

print(sumRecursion(1239))