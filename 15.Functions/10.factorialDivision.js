function factorialDivision (num1, num2){
   
    function getFactiorial(num){
        let sum = num;
        for(let i = num-1; i > 0; i--){
            sum *= i;
        }
        return sum;
    }

    function division(num1, num2){
        return (num1 / num2).toFixed(2);
    }

    let firstFactiorial = getFactiorial(num1);
    let secondFactiorial = getFactiorial(num2);
    let result = division(firstFactiorial, secondFactiorial);
    console.log(result);
}
factorialDivision(5, 2);