/**
 * writing a program from 5 numbers return 2 max number.
 */

const num = [2, 1, 3, 5, 4];
// const num = [];
if (num.length != 0) {
    num.sort(function (a, b) {
        return b - a;
    });

    console.log(num[0], num[1]);
}

// const b = num.reverse();
// console.log(num[0], num[1]);
// console.log(b[0],b[1]);
