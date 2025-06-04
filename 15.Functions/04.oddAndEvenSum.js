function oddAndEvenSum(num) {
    let sumEven = 0;
    let sumOdd = 0;
    let currentDigit = 0;

    while (num > 0) {
        currentDigit = num % 10;

        if (currentDigit % 2 === 0) {
            sumEven += currentDigit;
        } else {
            sumOdd += currentDigit;
        }
        num = Math.trunc(num / 10);
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
    
}
oddAndEvenSum(1000435)