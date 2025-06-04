function spiceMustFlow(yield) {
    let spice = 0;
    let daysCounter = 0;

    while (yield >= 100) {
        spice += yield;
        spice -= 26;
        yield -= 10;
        daysCounter++;
    }

    if (spice >= 26) {
        spice -= 26;
    }

    console.log(daysCounter);
    console.log(spice);
}
