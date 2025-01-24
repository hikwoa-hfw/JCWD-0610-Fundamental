// no 1

const dummy1: number = 25;

if (dummy1 % 2 === 0) {
  console.log("odd");
} else if (dummy1 % 2 === 1) {
  console.log("even");
}

// no 2

const prime: number = 113;
let isPrime: boolean = true;

if (prime <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < prime; i++) {
    if (prime % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(isPrime ? "bilangan prima" : "bukan prima");

// no 3

const n: number = 3;
let sumN: number = null;

for (let i = 1; i <= n; i++) {
  sumN += i;
  console.log(sumN);
}

console.log(sumN);

// no 4

const num: number = 6;
let factorial: number = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(factorial);

// no 5

let fibo: number = 0;
let fibo1: number = 1;
const nFibo: number = 3;
let result: number = null;
if (nFibo >1) {
  for (let i = 0; i < nFibo - 1; i++) {
    result = fibo + fibo1;
    fibo = fibo1;
    fibo1 = result;
  }
}
console.log(result);
