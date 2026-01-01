function resolutionStreak(days) {
    const goals = [10000,120,5];
    let result = "";
    for(let i=0;i<days.length;i++){
        const day = days[i];
        if(day[0] >= goals[0] && day[1] <= goals[1] && day[2] >= goals[2]){            
            result = `Resolution on track: ${i+1} day streak.`;
        } else{
            result = `Resolution failed on day ${i+1}: ${i} day streak.`;
            break;
        }
    }

    return result;
}
console.log(
resolutionStreak([[10000, 120, 5], [10950, 121, 11]])
)