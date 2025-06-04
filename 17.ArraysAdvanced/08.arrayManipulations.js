function arrayManipulations(arr) {
    let arrNum = arr[0];
    arrNum = arrNum.split(' ');
    arrNum = arrNum.map(Number);

    for (let i = 1; i < arr.length; i++) {
        let action = arr[i];
        action = action.split(' ');

        let method = action[0];
        let num1 = Number(action[1]);
        let num2 = Number(action[2]);

        switch (method) {
            case "Add":
                arrNum.push(num1)
                break;
            case "Remove":
                arrNum = arrNum.filter(num => num !== num1)
                break;
            case "RemoveAt":
                arrNum.splice(num1, 1)
                break;
            case "Insert":
                arrNum.splice(num2, 0, num1)
                break;
        }
    }
    return arrNum.join(' ')
}
console.log(arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']))