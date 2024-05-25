/**
 * Write a function to find the largest number in an array.
 */

function getLargestInArray(arr) {
    let max = Number.MIN_VALUE;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
const x = [1, 2, 3, 4, 5];
const solve = getLargestInArray(x);
console.log(solve);
