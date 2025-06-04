function emojiDetector(arr) {
    let str = arr.shift();
    let pattern = /(::|\*\*)(?<word>[A-Z][a-z]{2,})\1/g;
    let digits = str.match(/[0-9]/g);
    let coolThreshold = 1;

    for (let digit of digits) {
        digit = Number(digit);
        coolThreshold *= digit;
    }
    console.log(`Cool threshold: ${coolThreshold}`);

    let validEmojis = Array.from(str.matchAll(pattern));
    console.log(`${validEmojis.length} emojis found in the text. The cool ones are:`);
    

    for (let validEmoji of validEmojis) {
        let emojiWord = validEmoji.groups.word;
        let coolness = 0;

        for (let symbol of emojiWord) {
            let ascii = symbol.charCodeAt();
            coolness += ascii;
        }

        if (coolness >= coolThreshold) {
            console.log(validEmoji[0]);
        }
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);