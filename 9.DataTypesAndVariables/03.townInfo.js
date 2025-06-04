function townInfo(townName, population, area) {

    let charTown = townName.length;
    let wrongInput = 0;

    if (charTown < 3) {
        console.log("Town name must be at least 3 characters!");
        wrongInput++

    }

    if (population < 0) {
        console.log(`Population must be a positive number!`);
        wrongInput++

    }

    if (area < 0) {
        console.log(`Area must be a positive number!`);
        wrongInput++
    }


    if (wrongInput === 0) {
        console.log(`Town ${townName} has population of ${population} and area ${area} square km.`);

    }
}
// townInfo('LA', 1481353,512)