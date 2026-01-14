import re
def parse_link(markdown):
    link_text_regex = r"\[\w+\s*\w*.*\]"
    link_href_regex = r"\([\w\:\/\/\.]+\)"
    link_text = re.findall(link_text_regex,markdown)[0].replace("[","").replace("]","")
    link = re.findall(link_href_regex,markdown)[0].replace("(","").replace(")","")
    return f'<a href="{link}">{link_text}</a>'

print(
    parse_link("[freeCodeCamp](https://freecodecamp.org/)")
)