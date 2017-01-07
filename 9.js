/*
 A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

 a^2 + b^2 = c^2
 For example, 32 + 42 = 9 + 16 = 25 = 52.

 There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 Find the product abc.
 */

var result = false;

for (let i = 0; i < 1000; i += 1) {
    for (let j = i + 1; j < 1000; j += 1) {
        for (let k = j + 1; k < 1000; k += 1) {
            if (i + j + k === 1000 && Math.pow(i, 2) + Math.pow(j, 2) === Math.pow(k, 2)) {
                result = i * j * k;
                break
            }
        }
        if (result) break;
    }
    if (result) break;
}

console.log('RESULT:', result);