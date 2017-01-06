/*
 A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

 Find the largest palindrome made from the product of two 3-digit numbers.
 */

var result = -Infinity;

for (let i = 100; i < 1000; i += 1) {
    for (let j = 100; j < 1000; j += 1) {
        let tmp = i * j;
        let tmpString = String(i * j);
        let tmpReverse = tmpString.split('').reverse().join('');
        if (tmpString == tmpReverse) {
            result = Math.max(result, tmp);
        }
    }
}

console.log('RESULT:', result);