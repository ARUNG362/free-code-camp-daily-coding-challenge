def nth_fibonacci(n):
    a = 0
    b = 1
    fibo = 0

    for i in range(1,n,1):
        fibo = a + b
        a = b
        b = fibo
    return a

print(nth_fibonacci(10))