/**
 * write a function to reverse a string
 * Using simple for loop.
 */

const str = 'Hello baby';
let newString = '';
function reverseString(){
    for(let i = str.length-1; i>=0; i--){
        newString+=str[i];
    }
    return newString;
}

const solve = reverseString(str);
console.log(solve);

