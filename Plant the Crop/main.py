import math
def get_number_of_plants(field_size, unit, crop):
    square_meter_config = {
        "acres": 4046.86,
        "hectares": 10000
    }
    crops_config = {
        "corn": 1,
        "wheat": 0.1,
        "soybeans": 0.5,
        "tomatoes": 0.25,
        "lettuce": 0.2
    }

    square_meters = square_meter_config[unit] * field_size
    return math.floor(square_meters / crops_config[crop])

