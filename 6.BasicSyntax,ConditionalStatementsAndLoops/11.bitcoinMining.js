function bitcoinMining(array) {
    let totalMoney = 0;
    let daysCounter = 0;
    let dayOfFirstBTC = 0;
    let BTCbought = 0;

    for (let goldDay of array) {

        daysCounter++;

        if (daysCounter % 3 === 0) {
            goldDay -= goldDay * 0.3;
        }

        let money = goldDay * 67.51;
        totalMoney += money;

        while (totalMoney >= 11949.16) {
            BTCbought++;
            totalMoney -= 11949.16;

            if (BTCbought === 1) {
                dayOfFirstBTC = daysCounter;
            }
        }
    }

    console.log(`Bought bitcoins: ${BTCbought}`);

    if (BTCbought > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBTC}`);
    }

    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

