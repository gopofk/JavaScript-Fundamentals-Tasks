function equalSums(arr) {

    let counter = 0;

    for (let i = 0; i < arr.length; i++) {

        let sumLeft = 0;
        let sumRight = 0;


        for (let left = i - 1; left >= 0; left--) {
            sumLeft += arr[left];
        }

        for (let right = i + 1; right < arr.length; right++) {
            sumRight += arr[right];
        }

        if (sumLeft === sumRight) {
            counter++
            console.log(i);
        }

    }

    if (counter === 0) {
        console.log("no");

    }
}
equalSums([1, 2, 3])