/**
 * Write a function to check if a number is in a given range.
 */

function isGivenRange(x,min,max){
    return x >= min && x <= max;
}

const x = 8;
const min = 1;
const max = 10;

const solve = isGivenRange(x,min,max);

if(solve){
    console.log(x,'is in the given range.');
}else{
    console.log(x,'is not in the given range.');
}

// console.log(solve);