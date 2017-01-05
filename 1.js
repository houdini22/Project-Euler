/*
 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

 Find the sum of all the multiples of 3 or 5 below 1000.
 */

const mutiples = [3, 5];
const below = 1000;
let sum = 0;

for (let i = 1; i < below; i += 1) {
    for (let multiple of mutiples) {
        if (i % multiple === 0) {
            sum += i;
            break;
        }
    }
}

console.log("RESULT:", sum);