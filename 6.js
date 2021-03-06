/*
 The sum of the squares of the first ten natural numbers is,

 1^2 + 2^2 + ... + 10^2 = 385
 The square of the sum of the first ten natural numbers is,

 (1 + 2 + ... + 10)^2 = 552 = 3025
 Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

 Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

var result1 = 0;
var result2 = 0;
var result = 0;

for (let i = 1; i <= 100; i += 1) {
    result1 += Math.pow(i, 2);
    result2 += i;
}

result2 = Math.pow(result2, 2);

result = result2 - result1;

console.log('RESULT:', result);