/**
 * program for checking if a number is prime or not?
 */

const x = 11;
let checker = 2;

function prime(x){
    
      if(x>1){  // let checker = 2;
        if(x == checker){
            return "Prime Number";
        }

        if(x % checker == 0){
            return "Not a Prime Number";
        }
        checker ++;
    return prime(x);
      }
    return "Not a Prime Number";
}

const solve = prime(x);
console.log(x + " is " +solve);