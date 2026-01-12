function getNumberOfPlants(fieldSize, unit, crop) {
    const squareMeterConfig = {
        "acres": 4046.86,
        "hectares": 10000
    };
    const cropsConfig = {
        "corn": 1,
        "wheat": 0.1,
        "soybeans": 0.5,
        "tomatoes": 0.25,
        "lettuce": 0.2
    };

    let squareMeters = squareMeterConfig[unit] * fieldSize;
    console.log(squareMeters);
    return Math.floor(squareMeters / cropsConfig[crop]);
}

console.log(
    // getNumberOfPlants(2, "hectares", "lettuce")
    getNumberOfPlants(1, "acres", "corn")
)