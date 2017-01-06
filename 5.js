/*
 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

 What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

var result = false;

for (let i = 1; ; i += 1) {
    let isOk = true;
    for (let j = 2; j <= 20; j += 1) {
        if (i % j > 0) {
            isOk = false;
            break;
        }
    }
    if (isOk) {
        result = i;
        break;
    }
}

console.log('RESULT:', result);