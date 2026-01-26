def fizz_buzz_mini(n):
    result = ""
    if n % 3 ==0:
        result += "Fizz"
    if n % 5 == 0:
        result += "Buzz"

    return result if result else f"{n}"