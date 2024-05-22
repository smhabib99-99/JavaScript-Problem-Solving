/**
 * write a function to generate fibonacci series up to n terms.
 */

function genFibonacci(n){
    let a = 0;
    let b = 1;

    for(let i = 1; i <= n; i++){
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;

    }
}
const n = 13;
genFibonacci(n);
