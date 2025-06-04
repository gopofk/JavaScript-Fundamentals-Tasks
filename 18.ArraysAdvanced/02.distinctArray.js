function distinctArray(arr) {
    let unique = arr.filter((value, index) => arr.indexOf(value) === index);
    return unique.join(" ");
}
console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2, 2]))