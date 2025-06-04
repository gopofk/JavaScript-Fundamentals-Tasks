function login(array) {
    let username = array[0];
    let password = username.split("").reverse().join("");
    let counter = 0;
    
    for (let i = 1; i <= array.length; i++) {
        counter++

        if (counter === 4 && array[i] !== password) {
            console.log(`User ${username} blocked!`);
            break;
        }

        if (array[i] === password) {
            console.log(`User ${username} logged in.`)
            break;

        } else {
            console.log("Incorrect password. Try again.")
        }
    }
}
