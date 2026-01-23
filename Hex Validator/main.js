function isValidHex(str) {
    const hexRegex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/
    console.log(hexRegex.test(str));
    return hexRegex.test(str);
}

// isValidHex("#123")
// isValidHex("#ABCDEF")
isValidHex("#1234567")