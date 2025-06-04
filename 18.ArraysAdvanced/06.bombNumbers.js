function bombNumbers(arr1, arr2) {
    let bombNum = arr2[0];
    let power = arr2[1];

    while (arr1.includes(bombNum)) {
        let indexOfBomb = arr1.indexOf(bombNum);
        
        let start = Math.max(0, indexOfBomb - power);
        let deleteCount = power * 2 + 1;

        if (start + deleteCount > arr1.length) {
            deleteCount = arr1.length - start;
        }

        arr1.splice(start, deleteCount);
    }

    let sum = arr1.reduce((a, b) => a + b, 0);
    return sum;
}

console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]))