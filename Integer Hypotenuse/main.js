function isIntegerHypotenuse(a, b) {
    let hypotenuse = (a * a) + (b * b);
    hypotenuse = Math.sqrt(hypotenuse);
    return Number.isInteger(hypotenuse)
}

console.log(
    // isIntegerHypotenuse(3, 4)
    isIntegerHypotenuse(2, 3)
)