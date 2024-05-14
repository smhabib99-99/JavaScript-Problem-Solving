/** 
 * write a function to check if a number is even ?
*/

const even = 89;

function isEven(num){
    if(num%2==0){
        return 'even';
    }else{
        return 'Please enter even Number';
    }
}

const sol = isEven(even);
console.log(sol);