/**
 * write a function to find factorial of a number.
 */

function getFactorial(num){
    let x = 1;
    if(num === 0){
        return 1;
    }else{
        x = num * getFactorial(num-1);
        return x;
    }
  
}

const x = 5;
const solve = getFactorial(x);
console.log(solve);