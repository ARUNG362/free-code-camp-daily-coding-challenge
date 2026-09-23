function isMirror(str1, str2) {
    return str1.replace(/[^a-zA-Z]/g, "") == reverseStr(str2);
}

function reverseStr(str){
    let strLen = str.length;
    let revStr = "";
    for(let i=strLen-1;i>=0;i--){
        if(str[i].match(/\w/)){
            revStr += str[i];
        }
        
    }
    // console.log(revStr)
    return revStr;
}

console.log(
    // isMirror("RaceCar", "RaceCar") 
    isMirror("Hello World", "dlroW-olleH") 
);