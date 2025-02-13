// Stack LIFO last in first out
class Stack {
    constructor() {
        this.container = [];
        this.maxSize = 10;
    }
    isFull() {
        return this.container.length >= this.maxSize;
    }
    isEmpty() {
        return this.container.length === 0;
    }
    push(element) {
        if (this.isFull()) {
            return "Container is full";
        }
        this.container.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return "Container is empty";
        }
        this.container.pop();
    }
    showContainer() {
        return this.container;
    }
}
const stak = new Stack();
stak.push(1);
stak.push(2);
stak.push(3);
stak.push(4);
console.log(stak.showContainer());
stak.pop();
stak.pop();
stak.pop();
console.log(stak.pop());
console.log(stak.pop());
console.log(stak.showContainer());
class Queue {
    constructor() {
        this.container = [];
        this.maxSize = 10;
    }
    enqueue(element) {
        this.container.push(element);
    }
    showContainer() {
        return this.container;
    }
    dequeue() {
        this.container.shift();
    }
}
const que = new Queue();
que.enqueue(1);
que.enqueue(1);
que.enqueue(1);
que.enqueue(2);
console.log(que.showContainer());
que.dequeue();
que.dequeue();
que.dequeue();
console.log(que.showContainer());
const buah = ["mangga", "mangga", "mangga", "pisang"];
const mySet = new Set(buah);
console.log(mySet);
// Hash table
const myMap = new Map();
myMap.set("name", "john");
myMap.set(123, "9000");
myMap.set({ address: "jakart" }, 200);
console.log(myMap.get({ address: "jakart" }));
const fn = () => { };
myMap.set(fn, 29);
console.log(myMap.get(fn));
for (const [key, value] of myMap) {
    console.log(`${key} = ${value}`);
}
console.log(myMap.size);
console.log(myMap.has(fn));
console.log(myMap.has(123));
console.log(myMap.delete(fn));
console.log(myMap.has(fn));
export {};
