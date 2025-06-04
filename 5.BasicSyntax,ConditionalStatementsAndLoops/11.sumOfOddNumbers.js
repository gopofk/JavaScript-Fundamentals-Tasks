function sumOfOddNumbers(num){
    let totalSum = 0;
    let i = 1;
    
    while (num > 0){
        console.log(i);
        totalSum += i;
        i += 2;
        num -= 1;
    }  
    console.log(`Sum: ${totalSum}`);
}
sumOfOddNumbers(5);