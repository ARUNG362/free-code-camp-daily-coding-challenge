function toDecimal(binary) {
    let decimal = 0

    for(let i=0;i<binary.length;i++){
        decimal = (decimal * 2) + parseInt(binary[i]);
    }

    return decimal;
}

console.log(
    toDecimal("1010101") 
)

/**
 * Time: O(n)
 * Space: O(1)
 */