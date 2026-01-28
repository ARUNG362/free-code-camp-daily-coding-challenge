function flatten(arr) {
    let resArr = [];
    arr.forEach(a => {
        if(typeof a !== "object"){
            console.log(a)
            resArr.push(a);
        }else{
            resArr = resArr.concat(flatten(a));
        }
    })
    // console.log(resArr)
    return resArr;
}



console.log(
    // flatten([1, [2, 3], 4])
    flatten([5, [4, [3, 2]], 1])
)