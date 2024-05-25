/**
 * Write a function to find the smallest number in an array.
 */

function getSmallestNumber(arr) {
    let min = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
const x = [1, 2, 3, 4, 5];
const solve = getSmallestNumber(x);
console.log(solve);