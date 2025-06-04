function smallestTwoNumbers(arr){
    let newArr = [];
    arr.sort((a, b) => a - b);

    for (let i = 0; i <= 1; i ++){
        newArr.push(arr[i]);
    }
    return newArr.join(' ');
}
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]))