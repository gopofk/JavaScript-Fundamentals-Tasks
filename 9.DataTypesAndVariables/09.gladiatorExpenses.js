function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalExpenses = 0;
    let shieldBreakCount = 0;

    for (let fight = 1; fight <= lostFightsCount; fight++) {
        let helmetBroken = false;
        let swordBroken = false;

        if (fight % 2 === 0) {
            totalExpenses += helmetPrice;
            helmetBroken = true;
        }

        if (fight % 3 === 0) {
            totalExpenses += swordPrice;
            swordBroken = true;
        }

        if (helmetBroken && swordBroken) {
            totalExpenses += shieldPrice;
            shieldBreakCount++;

            if (shieldBreakCount % 2 === 0) {
                totalExpenses += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}