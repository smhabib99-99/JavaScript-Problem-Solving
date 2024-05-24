/**
 * Write a function to find the sum of all numbers in an array.
 */

function getSumInArray(arr){
    let y = 0;
    for(let i = 0; i<arr.length; i++){
        y += arr[i];
    }
    return y;
}

const x = [1,2,3,4,5];

const solve = getSumInArray(x);
console.log(solve);