function sumDigits(num){
    let numStr = num + '';
    let sum = 0;

    for(let char of numStr){
        
        sum += Number(char);
    }
    console.log(sum);
}
