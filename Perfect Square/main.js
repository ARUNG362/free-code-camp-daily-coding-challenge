function isPerfectSquare(n) {
    if(n < 0){
        return false;
    } else if (n > 1){
        return check(n)
    } else{
        return true;
    }
    return n;
}

function check(n){
    let half = parseInt(n/2);
    // console.log(half);
    for(let i = 2; i < half; i++){
        if( i * i == n){
            return true;
        }
    }
    return false;
}


console.log(
    isPerfectSquare(99)
);