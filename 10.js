/*
 The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

 Find the sum of all the primes below two million.
 */

var limit = 2000000;
var primeNumbers = [];

for (let i = 2; i < limit; i += 1) {
    // check if prime
    let isPrimeNumber = true;
    for (let j = 2; j < i; j += 1) {
        if (i % j === 0) {
            isPrimeNumber = false;
            break;
        }
    }
    if (isPrimeNumber) {
        primeNumbers.push(i);
    }
    console.log(i);
}

var result = primeNumbers.reduce((prev, current) => {
    return prev + current;
}, 0);

console.log('RESULT:', result);