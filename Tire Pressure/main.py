def tire_status(pressures_psi, range_bar):
    min_psi = range_bar[0] * 14.5038
    max_psi = range_bar[1] * 14.5038
    res = []

    for tire in pressures_psi:
        if tire < min_psi:
            res.append("Low")
        elif tire > max_psi:
            res.append("High")
        else:
            res.append("Good")

    return res

print(
    tire_status([30, 28, 30, 29], [1.9, 2.1])
)