import re

def is_mirror(str1, str2):

    return re.sub(r'[^a-zA-Z]', '', str1) == rev_str(str2)


def rev_str(str):
    str_len = len(str)
    rev_str = ""

    for i in range(str_len-1, -1, -1):
        if re.match(r'\w', str[i]):
            rev_str += str[i]
    
    # print(rev_str)
    return rev_str


print(
    is_mirror("Hello World", "dlroW olleH")
)