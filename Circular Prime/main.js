function isCircularPrime(n) {
    let numStr = n + "";
    for(let i=0;i< numStr.length;i++){
        let rotated = rotateOnce(numStr);
        numStr = rotated;
        if(!isPrime(numStr)) return false;
        
    }
    return true;
}

function rotateOnce(n){
    let numArr = n.split("");
    let firstDigit = numArr[0];
    let rotatedNum = "";
    for(let i=1;i<numArr.length;i++){
        rotatedNum += numArr[i];
    }
    rotatedNum += firstDigit;
    return rotatedNum;   
}

function isPrime(n){
    n = +n;
    for(let i=2;i<n;i++){
        if(n%i==0) return false;
    }
    return true;
}

console.log(
    isCircularPrime(197)
)
