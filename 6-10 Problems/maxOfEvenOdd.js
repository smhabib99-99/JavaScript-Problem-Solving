/**
 * Writing a program which takes 8 numbers and add all even numbers 
 * also add all odd numbers and return which one is greater.
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
let oddSum = 0;
let evenSum = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        oddSum = oddSum + arr[i];
    }else{
        evenSum = evenSum + arr[i];
    }
}

function max(){
    if(oddSum>evenSum){
        return oddSum;
    }else{
        return evenSum;
    }
}

const solve = max(oddSum,evenSum);

console.log(solve);
