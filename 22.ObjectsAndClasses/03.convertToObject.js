function convertToObject(text) {
    let obj = JSON.parse(text);

    for (let el in obj) {
        console.log(`${el}: ${obj[el]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');