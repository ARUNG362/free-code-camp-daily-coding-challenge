def compare_energy(calories_burned, watt_hours_used):
    workout_joules = calories_burned * 4184
    watt_joules = watt_hours_used * 3600

    if workout_joules > watt_joules:
        return "Workout"
    elif workout_joules < watt_joules:
        return "Devices"
    else:
        return "Equal"
    

print(
    compare_energy(250, 50)
)