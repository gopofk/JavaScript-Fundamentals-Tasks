function train(arr) {
    let arrWagons = arr[0];
    arrWagons = arrWagons.split(" ").map(Number);

    let maxPeoplePerWagon = Number(arr[1]);

    for (let i = 2; i < arr.length; i++) {
        let commands = arr[i];
        commands = commands.split(" ");

        if (commands[0] === "Add") {
            arrWagons.push(Number(commands[1]));
        } else {
            let people = Number(commands[0]);

            while (people > 0) {
                for (let j = 0; j < arrWagons.length; j++) {
                    let currentWagon = arrWagons[j];
                   
                    if(currentWagon + people > maxPeoplePerWagon){
                        continue;
                    } else {
                        currentWagon += people;
                        people = 0;
                        arrWagons[j] = currentWagon;
                    }
                }
            }
        }
    }
    return arrWagons.join(' ');
}
console.log(train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']))