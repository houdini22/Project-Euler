/*
 By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

 What is the 10 001st prime number?
 */

var result = 0;
var counter = 0;

for (let i = 2; ; i += 1) {
    let isPrime = true;
    for (let j = 2; j < i; j += 1) {
        if(i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime) {
        counter += 1;
        console.log(counter);
        if(counter === 10001) {
            result = i;
            break;
        }
    }
}

console.log(result);