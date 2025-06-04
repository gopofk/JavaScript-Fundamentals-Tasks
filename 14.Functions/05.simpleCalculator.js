function simpleCalculator(a, b, operator) { 
    let multiply = (a, b) => console.log(a * b);
    let divide = (a, b) => console.log(a / b);
    let add = (a, b) => console.log(a + b);
    let subtract = (a, b) => console.log(a - b);
    switch (operator) {
        case 'multiply': multiply(a, b); break;
        case 'divide': divide(a, b); break;
        case 'add': add(a, b); break;
        case 'subtract': subtract(a, b); break;
    }
} 