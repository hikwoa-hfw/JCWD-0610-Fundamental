// const message : string = 'Hello World';
// console.log(message);
// string built in methods
const nama = "BuBdi";
const message = "Hello World";
const nama1 = "Budi";
const nama2 = "Cahyo";
console.log(nama.toLowerCase());
console.log(nama.toUpperCase());
console.log(nama.replace("B", "f"));
console.log(nama.replaceAll("B", "f"));
console.log(message.split(""));
console.log(nama.concat(nama1, nama2));
console.log(nama1.slice(0, 2));
// Template String / Template Literals
const name3 = "charlie";
const message1 = `Hello ${name3}!`;
console.log(message1);
console.log("Hello " + name3 + "!");
// Number built in methods
const angka = "123";
console.log(Number(angka));
console.log(typeof Number(angka));
console.log(parseInt(angka));
console.log(parseFloat(angka)); //jarang dipakai
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
// string conversion
const angka1 = 123;
console.log(String(angka1));
console.log(angka1.toString());
// Boolean conversion
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean("0"));
console.log(Boolean("false"));
console.log(Boolean("true"));
console.log(Boolean("undefined"));
console.log(Boolean("null"));
// Date
const now = new Date();
console.log(now);
// Get method
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getTime());
// Set method
now.setDate(9);
now.setFullYear(2040);
now.setMonth(3);
console.log(now);
// Basic Operators
/*
+ addition
- subtraction
* multiplication
/ division
% modulus
** exponentiation
*/
// modify in place
let n = 1;
n += 2;
console.log(n);
// increment and decrement
let counter = 0;
counter++;
// counter--
console.log(counter);
// postfix and prefix
let counter2 = 2;
// console.log(counter2++);
console.log(++counter2);
// comparison operators
// ==, !=, ===, !==, >, <, >=, <=
// console.log(5 == 5); // true
// console.log(5 == "5"); // true
// console.log(5 === "5"); // false
// console.log(5<2); // false
// console.log(5>2); // true
// console.log(5>=2); // true
// console.log(5<=2); // false
// console.log(5!=2); // true
// console.log(5!="5"); // false
// console.log(5!=="5"); // true2
// Math
// math.ceil pembulatan keatas
console.log(Math.ceil(4.2));
// math.floor kebawah
console.log(Math.floor(4.2));
// math.round pembulatan terdekat
console.log(Math.round(4.2));
console.log(Math.round(4.7));
// math.max mengembalikan nilai terbesar
console.log(Math.max(1, 2, 3, 4, 100));
// math.min  mengembalikan nilai terkecil
console.log(Math.max(1, 2, 3, 4, 100));
// math.abs mengembalikan nilai absolut
console.log(Math.abs(-2));
// math.random mengembalikan nilai acak dari 0 dan 1
console.log(Math.random());
export {};
