export class foodQueue {
  order: string[];
  constructor(order: string[]) {
    this.order = order
  }

  processQueue() {
    for (let i = 0; i < this.order.length; i++) {
      const timeOut = Math.random() * 10000;
      const result = [];
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const success = true;

          if (success) {
            resolve(`${this.order[i]} sudah selesai dalam waktu ${timeOut}`);
            result.push(`${this.order[i]} sudah selesai dalam waktu ${timeOut}`)
          } else {
            reject(`an error occured`);
          }
        }, timeOut);
      });
    }
  }
}


const food = ["a", "b", "c", "d"]

const queue = new foodQueue(food)
console.log(queue.processQueue());
