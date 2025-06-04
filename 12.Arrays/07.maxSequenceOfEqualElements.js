function maxSequenceOfEqualElements(arr) {
    let maxCount = 1;
    let currentCount = 1;
    let maxElement = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] === arr[i - 1]) {
            currentCount++;
            
        } else {
            if (currentCount > maxCount) {
                maxCount = currentCount;
                maxElement = arr[i - 1];
            }
            currentCount = 1; 
        }
    }


    if (currentCount > maxCount) {
        maxCount = currentCount;
        maxElement = arr[arr.length - 1];
    }

    console.log(new Array(maxCount).fill(maxElement).join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);