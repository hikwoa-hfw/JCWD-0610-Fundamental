// if statement

const age: number = 12;

if (age < 2) {
  console.log("benar");
}

// else statement
// backup plan if statement

const age1: number = 10;

if (age >= 17) {
  console.log("bisa bikin ktp");
} else {
  console.log("belum cukup umru");
}

// else if statement
// kondisi lebih dari 1

const grade: string = "A";

if (grade == "A") {
  console.log("nilai bagus");
} else if (grade == "B") {
  console.log("nilai cukup");
} else {
  console.log("remed cuy");
}

// switch case
const day: string = "senin";

switch (day) {
  case "senin":
    console.log("hari senin");
    break;
  case "selasa":
    console.log("hari selasa");
    break;
  case "rabu":
    console.log("hari rabu");
    break;
  default:
    console.log("tidak ada hari");
}

// logical operator
// && dan
//  || or
//  !

const umur: number = 12;
const punyaSIM: boolean = true;

if (umur >= 17 && punyaSIM) {
  console.log("boleh nyetir");
} else {
  console.log("blm cukup umur dik");
}

const car: string = "mercy";

if (car === "mercy" || car === "bmw") {
  console.log("mobil jerman");
} else {
  console.log("mobil japan");
}

const isSunny: boolean = false;
const isRaining: boolean = !isSunny;
console.log(isRaining);

// ternary operator
// shortcut if else

const str: string = "typescript";

if (str === "typescript") {
  console.log("typescript");
} else {
  console.log("not typescript");
}

console.log(str === "javascript" ? "typescript" : "not typescript");

// Loop statement
// rangkaian instruksi yang dilakukan berulang hingga syarat tidak terpenuhi

// For Loop
// statement 1: inisialisasi dari variable looping
// statement 2: mendefine kondisi dari looping
// statement 3: kode yang dieksekusi di akhir code block

/*
for(statement1; 2; 3){
code block
}
*/

for (let i = 0; i < 2; i++) {
  console.log(9);
}

// while
let i: number = 2;
while (i < 3) {
  console.log();
  i++;
}

// do while

let count: number = 1;

do {
  console.log(`ini terisi ke: ${count}`);
  count++;
} while (count <= 5);


// break

let sum:number=2

while(true){
    console.log(sum);
    if(sum >= 5){
        break
    }
    sum++
}

// continue
// skip looping

for (let i=0; i<5; i++){
    if(i===2)continue
    console.log(i);
    
}