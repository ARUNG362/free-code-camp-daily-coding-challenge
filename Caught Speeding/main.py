def speeding(speeds, limit):
    over_limit = 0
    total = 0

    for i in range(0,len(speeds),1):
        if(speeds[i] > limit):
            over_limit+=1
            total += (speeds[i] - limit)

    if total > 0:
        return [over_limit, total/over_limit]

    return [0,0]

print(
    speeding([58, 50, 60, 55], 55) 
)