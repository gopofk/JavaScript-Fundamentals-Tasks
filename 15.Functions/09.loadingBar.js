function loadingBar(num) {

    function loadPercentage(num) {
        let loadedNum = num + "%";
        let arrLoadedBar = [];

        for (let i = 0; i < num / 10; i++) {
            arrLoadedBar.push('%');
        }

        if (num < 100) {
            num = num / 10;

            for (let i = 0; i < 10 - num; i++) {
                arrLoadedBar.push('.')
            }

            return (`${loadedNum} [${arrLoadedBar.join('')}]`);

        } else {
            return (`${loadedNum} Complete!`);
        }
    }

    function loadingMessage(num) {
        if (num < 100){
            return "Still loading...";
        } else {
            return "[%%%%%%%%%%]";
        }

    }

    let firstRow = loadPercentage(num);
    let secondRow = loadingMessage (num);
    console.log(firstRow);
    console.log(secondRow);

}
loadingBar(50);
