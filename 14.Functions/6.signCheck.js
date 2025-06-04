function signCheck(numOne, numTwo, numThree){
   let negatives = 0;

   [numOne, numTwo, numThree].forEach(num =>{
    if (num < 0) negatives++;
   });

   console.log(negatives % 2 === 0 ? "Positive" : "Negative");
}