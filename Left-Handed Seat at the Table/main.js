function findLeftHandedSeats(table) {
    let firstRow = table[0];
    let secondRow = table[1];
    let res = 0;
    firstRow.forEach((row,i) => {
        if(row == "U"){
            if(i == firstRow.length -1){
                res++
            }else if (i < firstRow.length -1 && firstRow[i+1] !== "R"){
                res++; 
            }
        }
    })

    secondRow.forEach((row,i) => {
        if(row == "U"){
            if(i == 0){
                res++
            }else if (i > 0 && secondRow[i-1] !== "R"){
                res++;  
            }
        }
    })
    return res;
}
findLeftHandedSeats([["U", "R", "U", "U"], ["U", "U", "L", "U"]])