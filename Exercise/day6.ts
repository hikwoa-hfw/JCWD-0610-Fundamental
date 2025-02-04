// no 1
interface Student {
  name: string;
  age: number;
  email: string;
  score: number;
}

class CalculateStudent {
  student: Student[];

  constructor(student: Student[]) {
    this.student = student;
  }

  calculate() {
    let highestScore = Math.max(
      ...new Set(student.map((index) => index.score))
    );
    let lowestScore = Math.min(...new Set(student.map((index) => index.score)));
    let averageScore =
      student.map((value) => value.score).reduce((a, b) => a + b) /
      student.length;

    let highestAge = Math.max(...new Set(student.map((index) => index.age)));
    let lowestAge = Math.min(...new Set(student.map((index) => index.age)));
    let averageAge =
      student.map((value) => value.age).reduce((a, b) => a + b) /
      student.length;
    return {
      score: { highestScore, lowestScore, averageScore },
      age: { highestAge, lowestAge, averageAge },
    };
  }
}

const student: Student[] = [
  { name: "cahyo", email: "cahyo@mail.com", score: 88, age: 19 },
  { name: "ikhbal", age: 20, score: 91, email: "ikhbal@cihuy.com" },
  { name: "DONTOL", age: 24, score: 52, email: "denniskontol@dontol.com" },
];

const calc = new CalculateStudent(student);
console.log(calc.calculate());

// no 2

class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  allProduct: { product: Product; qty: number }[] = [];
  total: number = 0;

  addToCart(product: Product, qty: number) {
    const existingProduct = this.allProduct.find(
      (item) => item.product.name === product.name
    );
    if (existingProduct) {
      existingProduct.qty += qty;
    } else {
      this.allProduct.push({ product, qty });
    }
    this.total += product.price * qty;
    return `${product.name} berhasil ditambahkan ke keranjang.`;
  }

  showTotal() {
    return {
      total: this.total,
      items: this.allProduct.map(
        (item) =>
          `${item.product.name} x ${item.qty} = ${
            item.product.price * item.qty
          }`
      ),
    };
  }

  formatPrice(format: number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 2,
    }).format(format)
  }
  checkout(money: number) {
    if(money<this.total) return "duite kurang"
    const transactionData = {
      total: this.formatPrice(this.total),
      items: this.allProduct.map((item) => ({
        name: item.product.name,
        price: item.product.price,
        qty: item.qty,
        subtotal: item.qty * item.product.price,
      })),
      kembalian: this.formatPrice(money-this.total)
    };

    this.total = 0;
    this.allProduct = [];

    return transactionData;
  }
}

const produk1 = new Product("buku", 20000);
const produk2 = new Product("meja", 2000000);

const tx = new Transaction();

console.log(tx.addToCart(produk1, 3));
console.log(tx.addToCart(produk2, 3));

console.log(tx.showTotal());
console.log(tx.checkout(9000000));
