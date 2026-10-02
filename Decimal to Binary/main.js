function toBinary(decimal) {
    let binary = "";

    while(decimal > 0){
        binary = (decimal % 2) + binary;
        decimal = parseInt(decimal/2);
    }
    // console.log(binary);
    return binary
}

// toBinary(5)
toBinary(12) 

/**
 *   Time:
        while runs n/2
        O(log n)
    
    Space:
        binary grows with n but not linearly
        O(log n)
 */