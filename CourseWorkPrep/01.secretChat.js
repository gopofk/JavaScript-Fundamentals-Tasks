function secretChat(arr) {
    let message = arr.shift();

    let command = arr.shift();

    while (command !== 'Reveal') {
        let tokens = command.split(':|:');
        let action = tokens.shift();

        if (action === 'InsertSpace') {
            let index = Number(tokens.shift());

            message = message.substring(0, index) + ' ' + message.substring(index);

        } else if (action === 'Reverse') {
            let substring = tokens.shift();

            if (message.includes(substring)) {
                message = message.replace(substring, '');
                let reversedSubstring = substring.split('').reverse().join('');
                message += reversedSubstring;
            } else {
                console.log('error');
                command = arr.shift();
                continue;
            }

        } else if (action === 'ChangeAll') {
            let [substring, replacement] = tokens;
            
            while(message.includes(substring)) {
                message = message.replace(substring, replacement);
            }

        }
        console.log(message);

        command = arr.shift();
    }
    console.log(`You have a new text message: ${message}`);
}
secretChat([

    'heVVodar!gniV',

    'ChangeAll:|:V:|:l',

    'Reverse:|:!gnil',

    'InsertSpace:|:5',

    'Reveal'

])

// secretChat([

//     'Hiware?uiy',

//     'ChangeAll:|:i:|:o',

//     'Reverse:|:?uoy',

//     'Reverse:|:jd',

//     'InsertSpace:|:3',

//     'InsertSpace:|:7',

//     'Reveal'

// ])