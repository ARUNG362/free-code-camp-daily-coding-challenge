def parse_unordered_list(markdown):
    import re
    ul_regex = r"^\-\s+"
    ul_match = re.findall(ul_regex, markdown)

    if ul_match and len(ul_match):
        markdown = markdown.replace(ul_match[0],"<ul><li>",1)
        markdown += "</li></ul>"
        li_match = re.findall(r"\n\-\s+",markdown)
        markdown = markdown.replace(li_match[0],"</li><li>")

    return markdown

parse_unordered_list("- Item A\n- Item B")