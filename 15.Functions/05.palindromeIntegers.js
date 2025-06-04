function palindromeIntegers(arr) {
    
    function checkIsPalindrome(num) {
        let numStr = num + '';
        let reversedNumStr = '';

        for (let i = numStr.length - 1; i >= 0; i--) {
            let currentChar = numStr[i];
            reversedNumStr += currentChar;
        }

        return numStr === reversedNumStr;
    }

    for (let num of arr){
        console.log(checkIsPalindrome(num));
    }
}
palindromeIntegers([32, 2, 22322, 1010]);