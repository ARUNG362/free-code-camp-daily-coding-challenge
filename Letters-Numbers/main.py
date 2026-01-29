def separate_letters_and_numbers(s):
    import re
    regex = [
        r"[a-zA-Z]+[0-9]",
        r"[0-9]+[a-zA-Z]"
    ]

    for reg in regex:
        matches = re.findall(reg,s)

        if matches:
            for match in matches:
                match_split = list(match)
                match_split[len(match_split) - 1] = f"-{match_split[len(match_split)-1]}"
                replace_str = ''.join(match_split)
                print(replace_str)
                s = s.replace(match,replace_str,1)
                print(s)

    return s

separate_letters_and_numbers("H3LL0W0RLD")