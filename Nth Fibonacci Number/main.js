function nthFibonacci(n) {
    let a = 0;
    let b = 1;
    let fibo = 0;
    for(let i=1;i<n;i++){
        // console.log(a);
        fibo = a + b;
        a = b;
        b = fibo;
        // console.log(a,b,fibo)
    }

    return a;
}
console.log(nthFibonacci(75))
