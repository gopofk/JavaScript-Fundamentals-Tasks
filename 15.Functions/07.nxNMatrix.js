function nxNMatrix(n) {

    function createRow() {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += n + ' ';
        }
        return row.trim();
    }

    for (let i = 0; i < n; i++) {
        console.log(createRow());
    }
}
nxNMatrix(3);