//  no1

class BankQueue {
  name: string;
  queue: string[];
  constructor() {
    this.queue = [];
  }

  enqueue(input: string) {
    this.queue.push(input);
    return `berhasil mendapat antrian`;
  }

  dequeue() {
    this.queue.length === 0
      ? `tidak ada antrian`
      : this.queue.shift()
      ? "berhasil mengeluarkan antrian"
      : null;
  }

  size() {
    return `${this.queue.length} ${this.queue}`;
  }
}

const bank = new BankQueue();

console.log(bank.enqueue("cahyo"));
console.log(bank.enqueue("cahyo"));
console.log(bank.enqueue("cahyo"));
console.log(bank.size());
console.log(bank.dequeue());
console.log(bank.size());

class KretoJowo {
  private passenger: string[];
  private maxSize: number;

  constructor() {
    this.passenger = ["MAS HIBBAN"];
    this.maxSize = 10;
  }

  private isFull() {
    return this.passenger.length >= this.maxSize;
  }

  private isEmpty() {
    return this.passenger.length === 1;
  }

  showPassenger() {
    return {
      passenger: this.passenger,
      availableSeats: this.maxSize - this.passenger.length,
    };
  }

  passengerIn(input: string) {
    const findName = this.passenger.find((value) => value === input.toLowerCase());
    if (this.isFull()) {
      return `Sepurane sepure kebak bolo`;
    } else if (findName) {
      return `${input} already exist as a passenger`;
    }
    this.passenger.push(input.toLowerCase());
    return `Passenger atas nama ${input} berhasil ditambah`;
  }

  passengerOut(input: string) {
    const findName = this.passenger.find((value) => value === input.toLowerCase());
    if (this.isEmpty()) {
      return `Mau ngeluarin siapa? kan kosong`;
    } 
    if (!findName) {
      return `Gaada yg namanya ${input} bro`;
    }

    if(findName === "mas hibban"){
        return `MAS HIBBAN gabisa di kick`
    }
    this.passenger.splice(this.passenger.indexOf(input, 1));
    return `Penumpang ${input} berhasil keluar`;
  }
}

const sepur = new KretoJowo();

console.log(sepur.showPassenger());
console.log(sepur.passengerIn("Wijaya"));
console.log(sepur.passengerIn("Wijaya"));
console.log(sepur.showPassenger());
console.log(sepur.passengerOut("Zilong"));
console.log(sepur.showPassenger());
console.log(sepur.passengerOut("Wijaya"));
console.log(sepur.showPassenger());
console.log(sepur.passengerOut("Wijaya"));
