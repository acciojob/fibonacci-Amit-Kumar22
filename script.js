
//const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;
for (let i = 0; i <= number; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
console.log(nextTerm);