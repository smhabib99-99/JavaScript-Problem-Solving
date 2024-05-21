/**
 * write a function to find factorial of a number.
 */

function findFactorial(num){
    let x = 1;
    for(let i = 1; i <= num; i++){
        x *= i;
    }
    return x;
}

const x = 5;
const solve = findFactorial(x);
console.log(solve);