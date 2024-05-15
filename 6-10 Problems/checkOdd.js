/**
 * writing a program to check a number is odd or not using function
 */

const odd = 97;

function isOdd(){
    if(odd%2!=0){
        return 'Odd';
    }else{
        return 'Enter Odd Number';
    }
}

const solve = isOdd(odd);
console.log(solve);