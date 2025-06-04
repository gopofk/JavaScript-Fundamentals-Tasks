function perfectNumber(num) {

    function getProperDivisors(num) {
        let arrDivisors = [];

        for (let divisor = 1; divisor < num; divisor++) {
            if (num % divisor === 0){
                arrDivisors.push(divisor);
            }
        }
        return arrDivisors;
    }

    function arrCalc(arr){
        let sum = 0;
        for(let i = 0; i < arr.length; i ++){
            sum += arr[i];
        }
        return sum;
    }

    let properDivisorsArr = getProperDivisors(num);
    let divisorsSum = arrCalc(properDivisorsArr);

    if (divisorsSum === num) {
        console.log("We have a perfect number!");   
    } else {
        console.log("It's not so perfect.");
    }
    
}
perfectNumber(1236498);