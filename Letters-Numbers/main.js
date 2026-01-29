function separateLettersAndNumbers(str) {
    const regex = [
        /[a-zA-Z]+[0-9]/g,
        /[0-9]+[a-zA-Z]/g
    ];

    regex.forEach(re =>{
        let matches = str.match(re);
        if(matches && matches.length){
            matches.forEach(match => {
                let matchSplit = match.split('')
                matchSplit[matchSplit.length - 1] = `-${matchSplit[matchSplit.length-1]}`;
                let replaceStr = matchSplit.join('');
                str = str.replace(match,replaceStr);
                
                console.log(str)
            })
        }
    })
    return str;
}
separateLettersAndNumbers("H3LL0W0RLD");