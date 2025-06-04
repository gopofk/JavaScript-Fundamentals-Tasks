function specialNumber(input) {

    for (let i = 1; i <= input; i++) {
        let sum = 0;
        let currentNumber = i;

        while (currentNumber > 0){
            let digit = currentNumber % 10;
            sum += digit;
            currentNumber = parseInt(currentNumber / 10);
        }


        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}    
specialNumber(15);
