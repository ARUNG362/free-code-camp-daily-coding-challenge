function formatNumber(number) {
    let res = "";
    for(let i=0;i<3;i++){
        if(i==0){
            res += `+${number[0]} `
        } else if(i==1){
            res += `(${number.substring(1,4)}) `
        } else{
            res += `${number.substring(4,7)}-${number.substring(7,11)}`
        }
    }
    console.log(res)
    return res;
}

console.log(
    // formatNumber("05552340182")
    formatNumber("15554354792") 
)