function mathPower(a, b) {
    let aPow = 1;
    
    for (let i = 1; i <= b; i++) {
        aPow *= a;
    }
    //console.log(Math.pow(a, b));
    console.log(aPow);
    
}
mathPower(3, 4)