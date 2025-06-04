function maxNumber(arr) {

    let topIntArr = [];


    for (let i = 0; i < arr.length - 1; i++) {
        let counter = 0;

        for (let j = i + 1; j < arr.length; j++) {

            counter++


            if (arr[i] <= arr[j]) {
                break;
            }

            if (j === arr.length - 1) {
                topIntArr.push(arr[i]);
            }
        }

    }

    topIntArr.push(arr[arr.length - 1]);

    console.log(topIntArr.join(" "));
}
maxNumber([14, 24, 3, 19, 15, 17]);