// Writing a function to find maximum of two numbers

const x = 11;
const y = 22;

function maxOfTwoNumbers(num1,num2){
    if(num1>num2){
        return num1;
    }else{
        return num2;
    }
}

const sol = maxOfTwoNumbers(x,y);
console.log(sol);