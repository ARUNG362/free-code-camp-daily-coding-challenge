def is_valid_hex(s):
    import re
    hex_regex = r"^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$"
    return True if re.search(hex_regex,s) else False

print(
    # is_valid_hex("#123")
    # is_valid_hex("#123abc")
    is_valid_hex("#1234567")
)