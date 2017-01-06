/*
 The prime factors of 13195 are 5, 7, 13 and 29.

 What is the largest prime factor of the number 600851475143 ?
 */

var endNumber = 600851475143;
var factor = 2;

while (factor <= endNumber) {
    if (endNumber % factor === 0) {
        endNumber /= factor;
    } else {
        factor += 1;
    }
}

console.log('RESULT:', factor);