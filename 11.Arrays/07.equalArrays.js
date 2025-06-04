function equalArrays(arr1, arr2) {
    let sum = 0;
    bool = true;

    for (let num = 0; num < arr1.length; num++) {
        num = Number(num);

        if (arr1[num] !== arr2[num]) {
            console.log(`Arrays are not identical. Found difference at ${num} index`);

            bool = false;
            break;
        }
    }

    for (let el of arr1) {
        sum += Number(el);
    }
    
    // sum = arr1.map(Number).reduce((a, b) => a + b, 0); втори вариант

    if (bool == true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}
equalArrays(['10', '20', '30'],

    ['10', '20', '30'])