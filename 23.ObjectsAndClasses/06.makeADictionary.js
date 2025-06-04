function makeADictionary(jsonStrings) {
    let dictionary = {};

    for (let jsonStr of jsonStrings) {
        let termObj = JSON.parse(jsonStr);
        let term = Object.keys(termObj)[0];
        let definition = termObj[term];

        dictionary[term] = definition;
    }

    let sortedTerms = Object.keys(dictionary).sort();

    for (let term of sortedTerms) {
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
    }
}
makeADictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

    '{"Boiler":"A fuel-burning apparatus or container for heating water."}', '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified,transmitted, or recorded."}'

])