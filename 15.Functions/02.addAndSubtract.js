function addAndSubtract(a, b, c) {

    function sum(num1, num2) {
        return num1 + num2;
    }

    function subtract(x, y) {
        return x - y;
    }

    let firstTwo = sum(a, b);
    let subResult = subtract(firstTwo, c);
    console.log(subResult);
}