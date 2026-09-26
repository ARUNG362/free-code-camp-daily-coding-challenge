function secondLargest(arr) {
    arr = [...new Set(arr)]
    return sort(arr)[arr.length-2];
}

function sort(arr){
    for(let i=0;i<arr.length;i++){
        let min = arr[i];

        for(let j=i;j<arr.length;j++){
            if(arr[j] < min){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    // console.log(arr);
    return arr;
}

console.log(
    secondLargest([20, 139, 94, 67, 31]) 
)
