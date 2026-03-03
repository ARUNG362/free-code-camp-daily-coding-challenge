function countPerfectCubes(a, b) {
    let min = Math.min(a,b);
    let max = Math.max(a,b);
    let count = 0;
    for(let i=min;i<=max;i++){
        const isCube = isPerfectCube(i);
        if(isCube) count++;
    }
    return count;
}

function isPerfectCube(n) {
    const root = Math.cbrt(n);
    return Number.isInteger(root);
}

console.log(
    countPerfectCubes(0, 30)
);