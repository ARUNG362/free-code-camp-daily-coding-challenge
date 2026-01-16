import math
def is_integer_hypotenuse(a, b):
    hypotenuse = (a*a) + (b*b)
    hypotenuse = math.sqrt(hypotenuse) 
    # print(hypotenuse % 1)
    # return isinstance(hypotenuse, int)
    return hypotenuse % 1 == 0

print(
    # is_integer_hypotenuse(5, 12)
    is_integer_hypotenuse(3, 4)
)