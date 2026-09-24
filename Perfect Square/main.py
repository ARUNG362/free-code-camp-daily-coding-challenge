def is_perfect_square(n):
    if n < 0:
        return False
    elif n > 1:
        return check(n)
    else:
        return True


def check(n):
    half = n//2

    for i in range(2,half,1):
        if i*i == n:
            return True


    return False

print(
    is_perfect_square(49)
)