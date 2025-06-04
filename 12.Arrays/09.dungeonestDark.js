function dungeonestDark(arr) {
    let initialHealth = 100;
    let initialCoins = 0;
    let rooms = arr.split('|');
    let roomsCount = 0;

    for (let room of rooms) {
        let tokens = room.split(" ");
        let action = tokens[0];
        let value = Number(tokens[1]);
        roomsCount++;

        if (action === "potion") {
            let newHealth = initialHealth;
            initialHealth += value;
            if (initialHealth > 100) {
                initialHealth = 100;
                value = Math.abs(newHealth - initialHealth);
            }
            console.log(`You healed for ${value} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);


        } else if (action === "chest") {
            initialCoins += value;
            console.log(`You found ${value} coins.`);

        } else {
            initialHealth -= value;

            if (initialHealth > 0) {
                console.log(`You slayed ${action}.`);

            } else {
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${roomsCount}`);
                return;
            }
        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${initialCoins}`);
    console.log(`Health: ${initialHealth}`);
}
dungeonestDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")