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