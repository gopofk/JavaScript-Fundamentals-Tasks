function plantDiscovery(arr) {
    let n = Number(arr.shift());
    let plantStats = {};

    for (let currentPlant = 1; currentPlant <= n; currentPlant++) {
        let [plant, rarity] = arr.shift().split('<->');
        rarity = Number(rarity);

        if (plant in plantStats) {
            plantStats[plant].rarity = rarity;
        } else {
            plantStats[plant] = { rarity, ratings: [] };
        }
    }

    let command = arr.shift();

    while (command !== 'Exhibition') {
        let [action, plantInfo] = command.split(': ');
        let [plantName, value] = plantInfo.split(' - ');
        value = Number(value);

        if (action === 'Rate') {
            if (plantName in plantStats) {
                plantStats[plantName].ratings.push(value);
            } else {
                console.log('error');
            }

        } else if (action === 'Update') {
            if (plantName in plantStats) {
                plantStats[plantName].rarity = value;
            } else {
                console.log('error');
            }

        } else if (action === 'Reset') {
            if (plantName in plantStats) {
                plantStats[plantName].ratings = [];
            } else {
                console.log('error');
            }

        }
        command = arr.shift();
    }
    console.log(`Plants for the exhibition:`);

    let entries = Object.entries(plantStats);

    for (let [plantName, { rarity, ratings }] of entries) {
        let ratingSum = 0;

        for (let rating of ratings) {
            ratingSum += rating;
        }

        let avg = ratings.length === 0 ? 0 : ratingSum / ratings.length;

        console.log(`- ${plantName}; Rarity: ${rarity}; Rating: ${avg.toFixed(2)}`);
    }
}
plantDiscovery((["3",

    "Arnoldii<->4",

    "Woodii<->7",

    "Welwitschia<->2",

    "Rate: Woodii - 10",

    "Rate: Welwitschia - 7",

    "Rate: Arnoldii - 3",

    "Rate: Woodii - 5",

    "Update: Woodii - 5",

    "Reset: Arnoldii",

    "Exhibition"]))