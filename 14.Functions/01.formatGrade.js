function formatGrade(grade) {
    grade = grade.toFixed(2);

    if (grade < 3.00) {
        console.log(`Fail (2)`);

    } else if (3.00 <= grade && grade < 3.50) {
        console.log(`Poor (${grade})`);

    } else if (3.50 <= grade && grade < 4.50) {
        console.log(`Good (${grade})`);

    } else if (4.50 <= grade && grade < 5.50) {
        console.log(`Very good (${grade})`);

    } else if (grade >= 5.50) {
        console.log(`Excellent (${grade})`);
    }
}
formatGrade(5.00)