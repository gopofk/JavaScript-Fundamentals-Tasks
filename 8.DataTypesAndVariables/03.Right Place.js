function rightPlace (input, letter, word){
    let newWord = (input).replace("_", letter);

    if (newWord === word){
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}