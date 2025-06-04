function thePyramidOfKingDjoser(base, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let height = 0;

    let currentBase = base;

    while (currentBase > 2) {
        height++;

        let outer = currentBase * currentBase - (currentBase - 2) * (currentBase - 2);
        let inner = (currentBase - 2) * (currentBase - 2);

        totalStone += inner * increment;

        if (height % 5 === 0) {
            totalLapis += outer * increment;
        } else {
            totalMarble += outer * increment;
        }

        currentBase -= 2;
    }

    totalGold += currentBase * currentBase * increment;
    height++;

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}
thePyramidOfKingDjoser (23, 0.5);