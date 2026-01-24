def get_bingo_letter(n):
    bingo_map = [
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
    ]


    for map in bingo_map:
        if n >= map["min"] and n <= map["max"]:
            return map["value"]

    return None

print(
    get_bingo_letter(75)
)