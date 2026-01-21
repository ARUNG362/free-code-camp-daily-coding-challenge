def parse_inline_code(markdown):
    import re
    markdown_regex = r"\`[a-zA-Z\s]+\`"
    markdown_matches = re.findall(markdown_regex,markdown)

    for match in markdown_matches:
        html_tag = match.replace('`', "<code>",1)
        html_tag = html_tag.replace('`', "</code>",1)
        markdown = markdown.replace(match, html_tag,1)

    return markdown

parse_inline_code("Use `let` or `const` to declare a variable.")