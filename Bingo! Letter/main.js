function getBingoLetter(n) {
    const bingoMap = [
        {
            "min": 1,
            "max": 15,
            "value": "B"
        },
        {
            "min": 16,
            "max": 30,
            "value": "I"
        },
        {
            "min": 31,
            "max": 45,
            "value": "N"
        },
        {
            "min": 46,
            "max": 60,
            "value": "G"
        },
        {
            "min": 61,
            "max": 75,
            "value": "O"
        }
    ];

    const bingo = bingoMap.find(map => n >= map.min && n <= map.max);
    return bingo.value;
}
getBingoLetter(75);