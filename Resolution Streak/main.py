def resolution_streak(days):
    goals = [10000,120,5]
    for i in range(0,len(days),1):
        day = days[i]
        if day[0] >= goals[0] and day[1] <= goals[1] and day[2] >= goals[2]:         
            result = f"Resolution on track: {i+1} day streak."
        else:
            result = f"Resolution failed on day {i+1}: {i} day streak."
            break

    return result

print(resolution_streak([[11600, 76, 13], [12556, 64, 26], [10404, 32, 59], [9999, 44, 124], [7508, 23, 167], [10900, 80, 0]]))