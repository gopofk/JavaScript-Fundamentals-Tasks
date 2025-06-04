function condenseArrayToNumber(inputArr) {
    let condensed = [];

    if (inputArr.length === 1) {
        console.log(inputArr[0]);

    } else {
        while (inputArr.length > 1) {
            condensed = [];

            for (let i = 0; i < inputArr.length - 1; i++) {
                condensed[i] = inputArr[i] + inputArr[i + 1];
            }

            inputArr = condensed;

        }
        console.log(condensed[0]);
    }
}
condenseArrayToNumber([1]);