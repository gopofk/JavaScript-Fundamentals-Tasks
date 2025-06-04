function arrayRotation(arr, rotation) {

    for (i = 0; i < rotation; i++) {
        let firstElement = arr[0];
        arr.push(firstElement);
        arr.shift();
    }
    console.log(arr.join(" "))
}
arrayRotation([51, 47, 32, 61, 21], 2);