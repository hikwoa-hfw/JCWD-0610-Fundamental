var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Person_email;
// cara untuk mengisi/ mnulis data dalam object
const object = {};
const user = {
    name: "bhudi",
    greet() { },
    greet2() {
        return "helo wlord";
    },
};
const person = {
    nama: "jocko",
    yuswo: 23,
};
// add props
console.log(person);
person.hobby = "muanceng rondo";
console.log(person);
person["addres"] = "mBantul";
console.log(person);
console.log(person["addres"]);
// del prop
delete person.addres;
console.log(person);
//  accessing value
console.log(person.name);
const res = person.nama;
console.log(res);
console.log(person['yuswo']);
console.log(Object.keys(person));
console.log(Object.values(person));
// mutable dan immutable
/*Mutable: Merujuk pada tipe data yang bisa diubah setelah dibuat. Biasanya ini adalah
objek dan array dalam JavaScript. Misalnya, kamu bisa mengubah isi array atau propertil
objek setelah diciptakan.

Immutable: Merujuk pada tipe data yang tidak bisa diubah setelah dibuat. Ini umumnya
berlaku pada tipe data primitif seperti string, number, boolean, null, undefined, dan
symbol dalam JavaScript. Begitu nilai primitif ditetapkan, nilai tersebut tidak bisa
diubah.
*/
// immutable
const count1 = 4;
let count2 = count1;
count2 = 10;
console.log(count2);
console.log(count1);
// mutable
let orang1 = { name: "jack" };
// let orang2: any = orang1
let orang2 = { ...orang1 };
console.log(orang1);
console.log(orang2);
orang2.age = 20;
console.log(orang1);
console.log(orang2);
// Shallow copy
const original1 = {
    name: "tjokro",
    address: {
        city: "djakarta",
    },
};
let shallowCopy = { ...original1 };
shallowCopy.address.city = "bandoeng";
console.log(shallowCopy);
console.log(original1);
// Deep Copy
let deepCopy = structuredClone(original1);
deepCopy.address.city = "magelang";
console.log(original1);
console.log(deepCopy);
// oprional chaining
let user2 = {};
console.log(user2.address);
console.log(user2.address?.street);
// FOr IN
const person2 = {
    name: "aceng",
    age: 72,
};
for (const key in person2) {
    console.log(key);
    console.log(person2[key]);
}
// Destructuring Assignment
const animal = {
    name: "joe",
    age: 2,
    weight: 10,
};
console.log(animal.name);
console.log(animal.weight);
console.log(animal.age);
const { name, weight, age } = animal;
console.log(name);
console.log(age);
console.log(weight);
//versi destruc array
const array = [10, 20];
console.log(array[1]);
console.log(array[0]);
const [a, b] = array;
console.log(a);
console.log(b);
// Spread operator
// copy/menggabungkan objek
const objectOne = { name: "jek", password: "abc123" };
const objectTwo = { email: "jacky@mail.com", name: "pepeng" };
const result = { ...objectOne, ...objectTwo, password: "hashh" };
// kanan replace yg kiri
console.log(result);
// This keyword
// mengakses properti dalam objek
const animal2 = {
    firstname: "udin",
    lastname: "petot",
    greet() {
        console.log(`hello ${this.firstname} ${this.lastname}`);
    },
};
animal2.greet();
// class
// template untuk membuat objek
// class declaration
class User2 {
    constructor() {
        this.greeting2 = () => {
            console.log("helo word");
        };
    }
    greeting() {
        console.log("helo word");
    }
}
// Class expresion
const User3 = class {
    constructor() {
        this.greeting2 = () => {
            console.log("helo word");
        };
    }
    greeting() {
        console.log("helo word");
    }
};
// constructor
// method bawaan class yang akan dijalankan pertama kali saat membuat object baru menggunakan class
// Access Modifier -> Public & private
class Person {
    constructor(name, email) {
        _Person_email.set(this, void 0);
        this.name = name;
        __classPrivateFieldSet(this, _Person_email, email, "f");
    }
    showEmail() {
        return "budi@email";
    }
    sendReminder() {
        const email = this.showEmail();
    }
    greeting() {
        return `hello ${this.name}`;
    }
}
_Person_email = new WeakMap();
const orang = new Person("budi", "budi@email");
const orang3 = new Person("cahyo", "budi@email");
console.log(orang.greeting());
console.log(orang3.greeting());
// getter & setter
// getter (get) dan setter (set) adalah metode khusus yang digunakan untuk membaca dan mengubah nilai properti secara lebih terkontrol
const orang4 = {
    firstName: "udin",
    lastName: "blake",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(value) {
        const split = value.split(" ");
        this.firstName = split[0];
        this.lastName = split[1];
    },
    register(value) {
        const split = value.split(" ");
        this.firstName = split[0];
        this.lastName = split[1];
    },
    showDetail() {
        return this.firstName + " " + this.lastName;
    },
};
console.log(orang4.fullName);
orang4.fullName = "joko morgan";
console.log(orang4.firstName);
console.log(orang4.lastName);
orang4.register("jp morgan");
console.log(orang4.firstName);
console.log(orang4.lastName);
console.log(orang4.showDetail());
// Inheritance -> peawrisan.  child bisa akses parent
// tanpa inheritance
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work() {
        console.log(`${this.name} is working`);
    }
}
class Manager {
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    work() {
        console.log(`${this.name} is working`);
    }
}
// masalah dalam kode tanpa inheritance
// duplikasi kode: name, salary, dan metode workk() harus ditulis ulang di employee dan manager
// sulit dikelola = jika ada perubahan work(), kita harus mengedit di banyak tempat
class Employee2 {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work() {
        console.log(`${this.name} is working`);
    }
}
class Manager2 extends Employee2 {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
}
const manager = new Manager2("siti", 90000, "ademin");
manager.name;
manager.department;
manager.salary;
manager.work();
//   instanceof 
// mengecek apakah sebuah objek memiliki hubungan ke class tertentu
class Animal {
}
class Rabbit extends Animal {
}
class Tree {
}
const rabbit = new Rabbit();
console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);
export {};
