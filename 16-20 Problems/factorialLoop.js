/**
 * write a function to find factorial of a number.
 */

function findFactorial(num){
    let x = 1;
    if(num<0){
        return `Enter positive number to get factorial!`
    }else if(num === 0){
        return 1;
    }else{
        for(let i = 1; i <= num; i++){
            x *= i;
        }
        return x;
    }
  
}

const x = 5;
const solve = findFactorial(x);
console.log(solve);