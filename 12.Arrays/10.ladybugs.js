function ladybugsGame(input) {
    let fieldSize = Number(input[0]);
    let ladybugIndexes = input[1].split(' ').map(Number);
    let field = new Array(fieldSize).fill(0);

    // Place initial ladybugs
    for (let index of ladybugIndexes) {
        if (index >= 0 && index < fieldSize) {
            field[index] = 1;
        }
    }

    for (let i = 2; i < input.length; i++) {
        let [startIndexStr, direction, flyLengthStr] = input[i].split(' ');
        let startIndex = Number(startIndexStr);
        let flyLength = Number(flyLengthStr);

        if (field[startIndex] !== 1 || startIndex < 0 || startIndex >= fieldSize) {
            continue; // Invalid start or no ladybug there
        }

        field[startIndex] = 0; // Ladybug takes off

        let position = startIndex;

        while (true) {
            position += direction === "right" ? flyLength : -flyLength;

            if (position < 0 || position >= fieldSize) {
                break; // Ladybug flies away
            }

            if (field[position] === 0) {
                field[position] = 1; // Landed
                break;
            }
        }
    }

    console.log(field.join(' '));
}

ladybugs([ 3, '0 1', '0 right 1', '2 right 1' ])