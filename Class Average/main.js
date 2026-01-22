function getAverageGrade(scores) {
    const gradesMap = [
        {
            min: 97,
            max: 100,
            grade: "A+"  
        },
        {
            min: 93,
            max: 96,
            grade: "A"  
        },
        {
            min: 90,
            max: 92,
            grade: "A-"  
        },
        {
            min: 87,
            max: 89,
            grade: "B+"  
        },
        {
            min: 83,
            max: 86,
            grade: "B"  
        },
        {
            min: 80,
            max: 82,
            grade: "B-"  
        },
        {
            min: 77,
            max: 79,
            grade: "C+"  
        },
        {
            min: 73,
            max: 76,
            grade: "C"  
        },
        {
            min: 70,
            max: 72,
            grade: "C-"  
        },
        {
            min: 67,
            max: 69,
            grade: "D+"  
        },
        {
            min: 63,
            max: 66,
            grade: "D"  
        },
        {
            min: 60,
            max: 62,
            grade: "D-"  
        },
        {
            min: 0,
            max: 59,
            grade: "F"  
        }
    ];
    const marksTotal = scores.reduce((acc,value) => acc = acc + value ,0);
    const average = parseInt(marksTotal/scores.length);
    return gradesMap.find(gradeConfig => average >= gradeConfig.min && average <= gradeConfig.max ).grade;
    
}

console.log(
    getAverageGrade([63, 69, 65, 66, 71, 64, 65])
    // getAverageGrade([92, 91, 90, 94, 89, 93])
);