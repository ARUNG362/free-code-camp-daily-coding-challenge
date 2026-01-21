function parseInlineCode(markdown) {
    const markdownRegex = /\`[a-zA-Z\s]+\`/g;
    const markdownMatches = markdown.match(markdownRegex);

    markdownMatches.forEach(match => {
        let htmlTag = match.replace('`', "<code>");
        htmlTag = htmlTag.replace('`', "</code>");
        markdown = markdown.replace(match, htmlTag);
    })
    console.log(markdown);
    return markdown;
}
// parseInlineCode("Use `let` to declare the variable.")
parseInlineCode("Use `let` or `const` to declare a variable.")