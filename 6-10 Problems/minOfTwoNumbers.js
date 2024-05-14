/* ==========================================================
finding minimum of two numbers using function in JavaScript
*/

const x = 1;
const y = 99;

function minOfTwoNumbers(num1,num2){
    if(num1<num2){
        return num1;
    }else{
        return num2;
    }
}

const solve = minOfTwoNumbers(x,y);
console.log(solve);