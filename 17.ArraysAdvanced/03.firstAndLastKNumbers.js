function firstAndLastKNumbers(arr) {
    let numK = arr.shift();
    let firstRow = [];
    let secondRow = [];

    for (let i = 0; i < numK; i++) {
        firstRow.push(arr[i]);
    }
    for (let k = arr.length - numK; k < arr.length; k++) {
        secondRow.push(arr[k])
    }
    return (`${firstRow.join(" ")}\n${secondRow.join(" ")}`)

}
console.log(firstAndLastKNumbers([3, 7, 8, 9, 10]));
