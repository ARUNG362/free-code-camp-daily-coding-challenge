function parseUnorderedList(markdown) {
    const ulRegex = /^\-\s+/;
    const ulMatch = markdown.match(ulRegex);
    if(ulMatch && ulMatch.length){
        markdown = markdown.replace(ulMatch[0],"<ul><li>");
        markdown += "</li></ul>";
        markdown = markdown.replaceAll(/\n\-\s+/g, "</li><li>");
    }

    return markdown;
}
console.log(
parseUnorderedList("-  JavaScript\n-  Python")
)