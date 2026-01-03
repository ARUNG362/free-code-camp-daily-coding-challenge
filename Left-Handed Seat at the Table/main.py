def find_left_handed_seats(table):
    first_row = table[0]
    second_row = table[1]
    res = 0
    for i, row in enumerate(first_row):
        if row == "U":
            if i == len(first_row) - 1:
                res+=1
            else:
                if i < len(first_row) -1 and first_row[i+1] != "R":
                    res+=1

    for i, row in enumerate(second_row):
        if row == "U":
            if i == 0:
                res+=1
            else:
                if i > 0 and second_row[i-1] != "R":
                    res+=1

    return res

find_left_handed_seats([["U", "R", "U", "L"], ["U", "R", "R", "R"]]) 