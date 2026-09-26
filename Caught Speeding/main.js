function speeding(speeds, limit) {
    let overLimit = 0;
    let total = 0;

    for(let i=0;i<speeds.length;i++){
        if(speeds[i] > limit){
            overLimit++;
            total += (speeds[i] - limit);
        }
    }

    if(overLimit > 0){
        return [overLimit, total/overLimit];
    }
    return [0,0];
}

console.log(
    speeding([58, 50, 60, 55], 55)
)