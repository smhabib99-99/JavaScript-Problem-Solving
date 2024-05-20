/**
 * write a function to count the number of words in a string.
 */

function wordCount(str){
    const newArr = str.split(" ");
    return newArr.length;
}

const text = 'This is me at Theme Park.';
console.log(wordCount(text));