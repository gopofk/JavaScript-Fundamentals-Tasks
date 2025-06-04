function buildAWall(arr) {
    arr = arr.map(Number);
    let concretePerDay = 0;
    let concreteArr = [];
    let daysCounter = 0;
    let totalCost = 0;

    while (!arr.every(num => num === 30)) {
        for (let i = 0; i < arr.length; i++) {

            if (arr[i] < 30) {
                arr[i]++;
                concretePerDay += 195;

            } else {
                continue;
            }
        }
        concreteArr.push(concretePerDay);
        totalCost += concretePerDay * 1900;
        concretePerDay = 0;
        daysCounter++;
    }

    console.log(concreteArr.join(', '));
    console.log(totalCost + " pesos");
    
}
buildAWall([17, 22, 17, 19, 17]);