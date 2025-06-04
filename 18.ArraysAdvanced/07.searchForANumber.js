function searchForANumber(arr1, arr2) {
    let numOfElements = arr2[0];
    let numsToDelete = arr2[1];
    let numToSearch = arr2[2];
    let newArray = [];

    for (let i = 0; i < numOfElements; i++) {
        newArray.push(arr1[i]);
    }

    newArray.splice(0, numsToDelete);
    let count = newArray.filter(el => el === numToSearch).length;
    
    return (`Number ${numToSearch} occurs ${count} times.`)
}
console.log(searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]))