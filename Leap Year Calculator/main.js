function isLeapYear(year) {
    console.log(year % 4)
    console.log(year % 100)
    console.log(year % 400)
    
    if(year % 4 == 0){
        if (year % 100 != 0){
            return true;
        } else if (year % 400 == 0){
            return true
        } else{
            return false;
        }
    }
    
    return false;
}

console.log(
isLeapYear(2100)
)

