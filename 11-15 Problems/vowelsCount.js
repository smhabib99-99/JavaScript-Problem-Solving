/**
 * write a function to find a number of vowels in a string
 */

const str = 'habib';
let count = 0;
function findVowels(){
    const vowels = ['a','e','i','o','u'];
    for(let x of str){
        if(vowels.includes(x)){
            count++;
        }
    }
    return count;
}

const solve = findVowels(str);
console.log(solve);