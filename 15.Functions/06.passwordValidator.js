function passwordValidator(password) {

    function checkValidLength(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function checkAlphanumeric(password) {
        let pattern = /^[A-Za-z0-9]+$/;

        if (pattern.test(password)) {
            return true;
        } else {
            console.log("Password must consist only of letters and digits");
            return false;
        }
    }

    function checkHasMin2Digits (password) {
        let pattern = /[0-9]{2,}/

        if (pattern.test(password)){
            return true;
        } else {
            console.log("Password must have at least 2 digits");
            return false;
        }
    }

    let isValidLength = checkValidLength(password);
    let isAlphaNumeric = checkAlphanumeric(password);
    let hasMin2Digits = checkHasMin2Digits(password);

    if (isValidLength && isAlphaNumeric && hasMin2Digits){
        console.log("Password is valid");
    }

}
passwordValidator('LogIn'); 