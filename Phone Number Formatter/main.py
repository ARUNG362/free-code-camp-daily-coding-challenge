def format_number(number):
    res = ""

    for i in range(0,3,1):
        if i==0:
            res += f"+{number[0]} "
        elif i==1:
            res += f"({number[1:4]}) "
        else:
            res += f"{number[4:7]}-{number[7:11]}"
        
    return res

print(
    format_number("05552340182")
)