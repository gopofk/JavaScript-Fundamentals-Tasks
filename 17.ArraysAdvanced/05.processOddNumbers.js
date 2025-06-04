function processOddNumbers(arr) {
    let newArr = [];
    for (let i = 1; i < arr.length; i = i+2) {
        let num = arr[i] * 2;
        newArr.unshift(num);
    }

    return newArr.join(" ")
}
console.log(processOddNumbers([10, 15, 20, 25]));
