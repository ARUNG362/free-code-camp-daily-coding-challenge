def is_circular_prime(n):
    num_str = str(n)

    for i in range(0,len(num_str),1):
        num_str = rotate_once(num_str)
        if not is_prime(num_str):
            return False

    return True

def is_prime(num):
    num = int(num)
    for i in range(2,num,1):
        if num % i == 0:
            return False
    return True

def rotate_once(num_str):
    num_str = str(num_str)
    first_digit = num_str[0]
    rotated_num = ""
    for i in range(1,len(num_str),1):
        rotated_num += num_str[i]
    
    rotated_num += first_digit
    return rotated_num

print(
    is_circular_prime(23)
)