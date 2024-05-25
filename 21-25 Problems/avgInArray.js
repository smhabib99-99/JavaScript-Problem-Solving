/**
 * Write a function to find the average of numbers in an array.
 */

function getAvgArray(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    const divisor = arr.length;
    const avg = sum/divisor;
    return avg;
}
const x = [1,2,3,4,5];
const solve = getAvgArray(x);
console.log(solve);