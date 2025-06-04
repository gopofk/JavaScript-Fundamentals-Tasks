function division(num) {
    let numbers = [2, 3, 6, 7, 10];
    let output = "";
    let counter = 0;

    for (let divide of numbers) {

        if (num % divide == 0) {
            output = `The number is divisible by ${divide}`;
            counter++;
        }
    }
    if (counter === 0) {
        output = "Not divisible";
    }
    console.log(output);
}

