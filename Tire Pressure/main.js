function tireStatus(pressuresPSI, rangeBar) {
    let minPressure = rangeBar[0] * 14.5038;
    let maxPressure = rangeBar[1] * 14.5038;
    return pressuresPSI.map(tire => {
        if(tire < minPressure){
            return "Low";
        } else if (tire > maxPressure){
            return "High";
        } else{
            return "Good";
        }

    })

}

console.log(
tireStatus([30, 28, 30, 29], [1.9, 2.1])
)