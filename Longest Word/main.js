function getLongestWord(sentence) {
    let maxWordLength = -Infinity;
    let maxWordIndex = -Infinity;
    let wordArr = sentence.split(" ");
    
    for(let i=0; i<wordArr.length; i++){
        let word = wordArr[i];
        let wordLength = word.replaceAll(".","").length;

        wordArr[i] = word.replaceAll(".","");
        if(wordLength > maxWordLength && wordLength != maxWordLength){
            maxWordLength = wordLength;
            maxWordIndex = i;
        }
    }
    return wordArr[maxWordIndex];
}

console.log(
    // getLongestWord("coding is fun")
    // getLongestWord("Coding challenges are fun and educational.") 
    getLongestWord("This sentence has multiple long words.")
)

// Time: O(n)
// Space: O(n)