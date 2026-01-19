function compareEnergy(caloriesBurned, wattHoursUsed) {
    const workoutJoules = caloriesBurned * 4184;
    const wattJoules = wattHoursUsed * 3600;
    return (workoutJoules > wattJoules)? "Workout": (workoutJoules < wattJoules) ? "Devices" : "Equal";
}
console.log(
    compareEnergy(250, 50)
)