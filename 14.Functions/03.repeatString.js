function repeatString(str, num) {
    let newStr = "";
    for (let i = 0; i < num; i++) {
        newStr += str;
    }
    console.log(newStr);
}
repeatString("abc", 3)