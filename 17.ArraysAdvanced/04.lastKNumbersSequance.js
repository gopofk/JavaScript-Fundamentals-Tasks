function lastKNumbersSequance(n, k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {

        let start = Math.max(0, i - k);
        let sum = 0;

        for (let j = start; j < i; j++) {
            sum += arr[j];
        }

        arr.push(sum);
    }

    return arr.join(" ");
}
console.log(lastKNumbersSequance(6, 3))