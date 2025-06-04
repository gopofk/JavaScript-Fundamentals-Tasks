function printAndSum(num1, num2){
    let sum = 0;
    let array = [];
    for (let i = num1; i <= num2; i ++){
        
        array.push(i);
        sum += i;
    }
    console.log(array.join(" "));
    console.log(`Sum: ${sum}`);
}