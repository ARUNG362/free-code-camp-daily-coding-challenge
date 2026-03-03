import math

def count_perfect_cubes(a, b):
    low = min(a, b)
    high = max(a, b)

    start = math.ceil(math.cbrt(low))

    end = math.floor(math.cbrt(high))

    return max(0, end - start + 1)

