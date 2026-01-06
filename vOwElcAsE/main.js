function vowelCase(str) {
    const vowels = ["a","e","i","o","u"];
    let res = "";
    for(let i=0;i<str.length;i++){
        let char = str[i];
        if(vowels.includes(char.toLowerCase())){
            res += char.toUpperCase();
        } else{
            res += char.toLowerCase();
        }
    }
    
    return res;
}

console.log(
    vowelCase("coding is fun")
)