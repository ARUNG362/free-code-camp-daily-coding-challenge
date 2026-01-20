function toConsonantCase(str) {
    const vowels = ["a","e","i","o","u"];
    let res = "";
    for(let i=0;i<str.length;i++){
        console.log(str[i].match(/[a-zA-Z]/));
        if(str[i].match(/[a-zA-Z]/)){
            if(vowels.includes(str[i].toLowerCase())){
                res += str[i].toLowerCase();
            } else if(!vowels.includes(str[i].toLowerCase())){
                res += str[i].toUpperCase();
            }
        } else{
            if (str[i] == "-"){
                res += "_";
            } else{
                res += str[i];
            }
        }
    }
    console.log(res);
    return res;
}

// toConsonantCase("helloworld");
toConsonantCase("_hElLO-WOrlD-")