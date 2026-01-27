from datetime import datetime, timezone

def odd_or_even_day(timestamp):
    day = datetime.fromtimestamp(timestamp / 1000, tz=timezone.utc).day
    print(day)
    return "even" if day % 2 == 0 else "odd"


print(odd_or_even_day(6739456780000))
