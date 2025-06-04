function addAndSubtract(arr) {
    let sumOriginal = 0;
    let sumNew = 0;

    for (i in arr) {
        sumOriginal += arr[i];
    }

    for (let index = 0; index < arr.length; index++) {
        let el = arr[index];

        if (el % 2 === 0) {
            arr[index] = el + index;
        } else {
            arr[index] = el - index;
        }
    }

    for (x in arr) {
        sumNew += arr[x];
    }

    console.log(arr);
    console.log(sumOriginal);
    console.log(sumNew);
}
addAndSubtract([5, 15, 23, 56, 35]);