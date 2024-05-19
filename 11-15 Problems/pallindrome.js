/**
 * write a function to check if a string is palindrome or not.
 */


const str = 'Madam';

let newString = '';

function isPalindrome(){
    for(let i = str.length-1; i>=0; i--){
        newString += str[i];
    }
    return newString;
}


const check = isPalindrome(str);

if(str.toLowerCase() === check.toLowerCase()){
    console.log('Palindrome');
}else{
    console.log('String is not a Palindrome');
}