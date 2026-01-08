function isSorted(arr) {
    let type = "";
    let temp = arr[0];

    for(let i=1;i<arr.length;i++){
        if(i == 1){
            if(arr[i] > temp) type = "Ascending";
            else type = "Descending";
        } else{
            if((type == "Ascending" && arr[i] < temp) || (type == "Descending" && arr[i] > temp)){
                type = "Not sorted";
                break;
            }
        }
        temp = arr[i];
    }
    return type;
}
console.log(
    isSorted([0.4, 0.5, 0.3])
)