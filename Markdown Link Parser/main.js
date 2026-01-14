function parseLink(markdown) {
    // console.log(markdown);
    const linkTextRegex = /\[\w+\s*\w*.*\]/;
    const linkHrefRegex = /\([\w\:\/\/\.]+\)/
    const linkText = markdown.match(linkTextRegex)[0].replace('[','').replace(']','');
    const link = markdown.match(linkHrefRegex)[0].replace('(','').replace(')','');
    return `<a href="${link}">${linkText}</a>`;
}
console.log(
    // parseLink("[freeCodeCamp](https://freecodecamp.org/)")
    // parseLink("[Donate to our charity.](https://www.freecodecamp.org/donate/)")
    parseLink("[Contribute to our repository at https://github.com/freeCodeCamp/freeCodeCamp.](https://github.com/freeCodeCamp/freeCodeCamp/)")
)
