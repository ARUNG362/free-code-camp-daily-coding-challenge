def to_consonant_case(s):
    import re
    vowels = ["a","e","i","o","u"]
    res = ""

    for i in range (0, len(s),1):
        if re.match(r"[a-zA-Z]",s[i]):
            if s[i].lower() in vowels:
                res += s[i].lower()
            else:
                res += s[i].upper()
        else:
            if s[i] == "-":
                res += "_"
            else:
                res += s[i]
    return res

to_consonant_case("helloworld")