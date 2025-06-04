function lowerOrUpper(char){
    let asciiCode = char.charCodeAt();

    if (asciiCode >= 65 && asciiCode <= 90){
        console.log("upper-case");

    } else if (asciiCode >= 97 && asciiCode <= 122){
        console.log("lower-case");
    }

}
// lowerOrUpper('f')