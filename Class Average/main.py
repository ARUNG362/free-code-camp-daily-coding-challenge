def get_average_grade(scores):
    grade_map = [
        {
            "min": 97,
            "max": 100,
            "grade": "A+"   
        },
        {
            "min": 93,
            "max": 96,
            "grade": "A"   
        },{
            "min": 90,
            "max": 92,
            "grade": "A-"   
        },{
            "min": 87,
            "max": 89,
            "grade": "B+"   
        },{
            "min": 83,
            "max": 86,
            "grade": "B"   
        },{
            "min": 80,
            "max": 82,
            "grade": "B-"   
        },{
            "min": 77,
            "max": 79,
            "grade": "C+"   
        },{
            "min": 73,
            "max": 76,
            "grade": "C"   
        },{
            "min": 70,
            "max": 72,
            "grade": "C-"   
        },{
            "min": 67,
            "max": 69,
            "grade": "C+"   
        },{
            "min": 63,
            "max": 66,
            "grade": "D"   
        },{
            "min": 60,
            "max": 62,
            "grade": "D-"   
        },{
            "min": 0,
            "max": 59,
            "grade": "F"   
        }
    ]
    total = 0

    for mark in scores:
        total += mark

    print(total)    
    average = int(total/len(scores))
    print(average)
    for grade_config in grade_map:
        if average >= grade_config["min"] and average <= grade_config["max"]:
            return grade_config["grade"]


print(
    get_average_grade([45, 48, 50, 52, 100, 54, 56, 58, 59])
    # get_average_grade([92, 91, 90, 94, 89, 93])
)