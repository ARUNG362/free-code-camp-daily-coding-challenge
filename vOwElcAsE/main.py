def vowel_case(s):
    vowels = ["a","e","i","o","u"]
    res = ""
    for i in range(0,len(s),1):
        char = s[i]
        
        if char.lower() in vowels:
            res += char.upper()
        else:
            res += char.lower()

    return res

print(
    vowel_case("vowelcase")
)