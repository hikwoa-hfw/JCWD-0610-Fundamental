// ARRAY
const arr1 = ["A", "B", "C"];
const arr2 = new Array("A", "B", "C");
const arr3 = [1, 2, 3];
const arr4 = new Array(1, 2, 3);
console.log(arr1);
console.log(arr1[0]);
arr1[3] = "E";
console.log(arr1);
const student = [
    {
        name: "Budi",
        email: "budi@mail",
        address: {
            street: "jl abdcde",
            city: "bantul",
        },
    },
    { name: "Joko", email: "joko@mail" },
    { name: "Cahyo", email: "agus@mail" },
];
const fruits = ["apple", "mango", "banana"];
for (const fruit of fruits) {
    console.log(fruit);
}
// exercise for of
// hitung jumlah bilangan
// input [1,2,3,4,5,6]= 21
const nums = [1, 2, 3, 4, 5, 6];
let temp = 0;
for (const num of nums) {
    temp += num;
}
console.log(temp);
// FUNCTION
// 1. function declaration
function square(angka, angka2 = 2, angka3) {
    return angka * angka2;
}
const multiply1 = square(3);
console.log(multiply1);
// 2. function expression
const square2 = function (angka) {
    return angka * angka;
};
const multiply2 = square2(3);
console.log(multiply2);
// FUNCTION SCOPE
// variable dalam func hanya bisa diakses dalam func tsb
function greeting() {
    const hello = "hello";
    console.log(hello);
}
// console.log(hello); gbs dipanggil
greeting();
// PARAMETER & ARGUMENT
// Parameter adl variable yang memiliki value dari argumen yg dimasukkan
// Argument adl variable yang dimasukkan saat pemanggilan function
// Parameter
const greeting2 = function (name) {
    const hello = "Hello";
    return hello + " " + name;
};
// Argumen
console.log(greeting2("wahyu"));
console.log(greeting2("budy"));
console.log(greeting2("woody"));
// DEFAULT PARAMETER
function multiply(a, b = 2) {
    console.log(a);
    console.log(b);
    return a * b;
}
console.log(multiply(5, 7));
console.log(multiply(5));
// REST PARAMETER
// mewakili sisa arg ke dalam 1 parameter
function myFunc(a, b, ...manyMoreArgs) {
    console.log(a);
    console.log(b);
    console.log(manyMoreArgs);
}
myFunc(1, 2, 3, 4, 5, 6);
// NESTED FUNCTION
// fungsi dalam fungsi
// inner bisa akses parameter dari outer, outer tdk bisa akses dari inner
function getMessage(nama) {
    function sayHello() {
        return "Hello" + " " + nama;
    }
    function welcomeMessage() {
        return "Welcome to Purrwadika";
    }
    return sayHello() + ", " + welcomeMessage();
}
console.log(getMessage("aku"));
// CLOSURE
// inner function memiliki akses ke variable dan parameter outer function bahkan setelah function di declare
function greeting3(name) {
    const defaultMessage = "hello";
    return function () {
        return defaultMessage + " " + name;
    };
}
const result = greeting3("bhudi");
console.log(result());
// RECURSIVE
// fungsi yang memanggil dirinya sendiri
function countDown(number) {
    console.log(number);
    let nextNumber = number - 1;
    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(9);
// ARROW FUNCTION
// shortcut function expression
const square3 = function (number) {
    return number * number;
};
// Syntax -> ()=> {}
const square4 = (number) => {
    return number * number;
};
const square5 = (number) => number * number;
// ARRAY BUILT IN METHOD
// JOIN -> menggabungkan value yang ada dalam string
const words = ["hello", "world"];
console.log(words.join(" "));
// POP -> menghilangkan value paling akhir di array
const words2 = ["tes", "helo", "word"];
console.log(words2);
words2.pop();
console.log(words2);
// SHIFT -> menghilangkan value paling depan di array
const words3 = ["tes", "helo", "word"];
words3.shift();
console.log(words3);
// UNSHIFT -> menambahkan value ke urutan paling depan array
const words4 = ["hello", "world"];
words4.unshift("test");
console.log(words4);
// PUSH -> menambahkan data ke paling akhir array
const words5 = ["hello", "world"];
words5.push("test");
console.log(words5);
// CONCAT -> menggabungkan banyak array jd 1 array
const array1 = ["hello"];
const array2 = ["world"];
const array3 = ["ehe"];
console.log(array1.concat(array2, array3));
// another option
const mergeArr = [...array1, ...array2, ...array3];
console.log(mergeArr);
// splice -> menghapus, mengganti, menambah value pada array
//  splice(startIndex, brp yg didelete, value pengganti)
const months = ["january", "february", "maret"];
months.splice(1, 0, "cahyo");
console.log(months);
// SLICE -> mereturn array baru berdasarkan start index dan end index
const fruits1 = ["apple", "orange", "lemon", "grape"];
console.log(fruits1.slice(1, 3));
// indexof -> mencari index dari value yang kita search
// kalau tdk ada return -1
const fruits2 = ["apple", "banana", "mango"];
console.log(fruits2.indexOf("apple"));
console.log(fruits2.indexOf("wahyu"));
// sort -> mengurutkan isi array berupa str/num
const fruits3 = ["apple", "banana", "jango", "mango", "cang"];
console.log(fruits3.sort());
// tanpa compare fn
const points = [98, 9, 4, 90];
console.log(points.sort());
// dg compare fn
const points2 = [100, 8, 90];
console.log(points2.sort((a, z) => a - z));
//  reverse -> membalikkan urutan dalam array
const points3 = [3, 2, 10, 5, 6];
points3.reverse();
console.log(points3);
//  map -> melakukan looping pada array dan mereturn array baru
const points4 = [1, 2, 3, 4, 5, 6];
const result2 = points4.map((point, index) => point * 2);
console.log(result2);
// foreach -> melakukan looping pada array tanpa mereturn array baru
const fruits4 = ["apple", "banana", "jango", "mango", "cang"];
let container = "";
const result4 = fruits4.forEach((fruit, index) => {
    container += fruit + " ";
    console.log(index);
    console.log(fruit);
});
console.log(container);
// filter -> looping pada setiap array dan mereturn array baru berdasarkan kondisi pada return fn
const ages = [1, 32, 8, 9, 10, 12, 19];
const result5 = ages.filter((age) => {
    return age > 17;
});
console.log(result5);
//  find -> mencari value yang pertama ditemukan dalam array
const ages2 = [1, 32, 8, 9, 10, 12, 19];
const result6 = ages2.find((age) => age > 14);
console.log(result6);
// findindex -> mirip find tetapi yg dihasilkan hanya indexnya
const ages3 = [1, 32, 8, 9, 10, 12, 19];
const result7 = ages3.findIndex((age) => age > 12);
console.log(result7);
//  reduce -> melakukan operasi aritmatika pada isi array
const numbers2 = [200, 50, 100, 50];
const result8 = numbers2.reduce((a, b) => a + b);
console.log(result8);
// includes -> mengecek value ada dalam suatu array atau tidak
const fruits5 = ["apple", "banana", "jango", "mango", "cang"];
console.log(fruits5.includes("apple"));
console.log(fruits5.includes("kacang"));
console.log(fruits5.includes("cang"));
export {};
