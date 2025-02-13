/*
    Write a JavaScript function called phoneNumber that takes a single argument input. 
    The function is intended to format a phone number. It checks the input to ensure 
    it meets certain criteria and then proceeds with formatting. The formatting 
    includes replacing the leading "0" with "62" and creating a template in the 
    format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The 
    function returns the formatted phone number.

    - Check if the input is of type "string." If it's not, return "Invalid phone number."
    - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
    - Make sure the input all are numeric 0-9
    ex : 
    input = "085211155555"
    output = "(6285)-2111-55555"

    ========================================================
    
    buat parent class Product
    constructor = nama, berat, price,stok

    buat child class dari produk yaitu Buku dan Pakaian 
    constructor = super, data unik dari buku dan pakaian 

    buat class OnlineShop
    constructor = products dan cart (private)
    method : 
        - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products
            return produk sudah ada dalam toko

        - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi
            sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog, kalau yang di masukkan 
            melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

        - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir. example: 1km * 2000.
            tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi
            untuk uangUser tidak boleh kurang dari total pembayaran.

        - showCatalog : menampilkan isi catalog dari toko

        - showCart : menampilkan isi cart user
*/

// no 1

const phoneNumber = (input: any) => {
  if (typeof input !== "string") return "invalid phone number";
  if (input.length !== 12) return "invalid phone number";
  const numCode = /^[0-9]+$/;
  if (!numCode.test(input)) return "invalid phone number";
  let number = "62";
  let number2 = "";
  let number3 = "";
  for (let i = 1; i < input.length; i++) {
    number.length < 4
      ? (number += input[i])
      : number2.length < 4
      ? (number2 += input[i])
      : (number3 += input[i]);
  }

  return `(${number}) - ${number2} - ${number3}`;
};
console.log(phoneNumber("082221257072"));

function phoneNumb (input: string){
  if(input.length !== 12){
    return "invalid phone number"
  }

  for (let i = 0; i<input.length; i++){
    if( input[i] < "0" || input[i] > "9"){
      return "invalid phone number"
    }
  }

  input = "62" + input.slice(1)

  let template = "(xxxx)-xxxx-xxxxx"

  const splitInput = input.split("")
  splitInput.forEach((item) => {
    template = template.replace("x", item)
  })
}

// no 2

class Product {
  name: string;
  stock: number;
  price: number;
  weight: number;

  constructor(name: string, stock: number, price: number, weight: number) {
    this.name = name;
    this.stock = stock;
    this.weight = weight;
    this.price = price;
  }
}

class Buku extends Product {
  author: string;

  constructor(
    name: string,
    stock: number,
    price: number,
    weight: number,
    author: string
  ) {
    super(name, stock, price, weight);
    this.author = author;
  }
}

class Pakaian extends Product {
  category: string;
  material: string;

  constructor(
    name: string,
    stock: number,
    price: number,
    weight: number,
    category: string,
    material: string
  ) {
    super(name, stock, price, weight);
    this.category = category;
    this.material = material;
  }
}
/*
 ========================================================
    
    buat parent class Product
    constructor = nama, berat, price,stok

    buat child class dari produk yaitu Buku dan Pakaian 
    constructor = super, data unik dari buku dan pakaian 

    buat class OnlineShop
    constructor = products dan cart (private)
    method : 
        - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products
            return produk sudah ada dalam toko

        - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi
            sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog, kalau yang di masukkan 
            melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

        - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir. example: 1km * 2000.
            tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi
            untuk uangUser tidak boleh kurang dari total pembayaran.

        - showCatalog : menampilkan isi catalog dari toko

        - showCart : menampilkan isi cart user
 */

class OnlineShop {
  private product: any[];
  private cart: any[];
  private total: number;
  private totalWeight: number;

  constructor() {
    this.product = [];
    this.cart = [];
    this.total = 0;
    this.totalWeight = 0;
  }

  addProduct(input: Product) {
    const checkProduct = this.product.find((x) => x.name === input.name);
    if (checkProduct !== undefined) {
      checkProduct.stock += input.stock;
      return "sidanya nambah stok";
    }
    this.product.push(input);
    return "jos";
  }

  addToCart(input: string, qty: number) {
    const checkProduct = this.product.find((x) => x.name === input);
    if (checkProduct !== undefined) {
      if (checkProduct.stock < qty) {
        return "stok e ra cukup boiss";
      }
      this.total += checkProduct.price * qty;
      this.totalWeight += checkProduct.weight * qty;
      this.cart.push(checkProduct.name, qty);
      checkProduct.stock -= qty;
      return "ok";
    } else {
      return "tdk ad produk";
    }
  }

  showCatalog() {
    return this.product;
  }

  showCart() {
    return {
      cart: this.cart,
      total: this.total,
      weight: this.totalWeight,
    };
  }

  transaction(money: number, distance: number) {
    const distancePrice = 2000;
    // const totalRego =
    //   Number(
    //     this.cart.map((value) => {
    //       return value.price + value.qty;
    //     })
    //   ) +
    //   distancePrice * distance;
    // // if(money< Number(this.cart.map((x) => x.price))){
    // //     return "duitmu kurang bos"
    // // }

    // if (totalRego > money) {
    //   return "uang ga cukup mbois";
    // } else {
    //   if (money === totalRego) {
    //     this.cart = [];
    //     return `berhasil`;
    //   } else {
    //     const susuk = money - totalRego;
    //     this.cart = [];
    //     return `Berhasil. susuk${susuk}`;
    //   }
    // }
    const calculateTotal =
      distancePrice * distance * this.totalWeight + this.total;
    if (money < calculateTotal || null) {
      return "gk ckp";
    } else {
      const susuk = money - calculateTotal;
      this.cart = [];
      this.total = 0;
      this.totalWeight = 0;
      return `berhasil, susuk ${susuk}`;
    }
  }
}

const pakaian1 = new Pakaian("NVM", 1, 90000, 1, "kaos", "katun");
const pakaian2 = new Pakaian(
  "Garp's Uniform",
  1,
  90000000,
  1,
  "kemeja",
  "besi"
);
const buku1 = new Buku("Laughtale Map", 1, 999999999, 2, "Silver Rayleigh");
const buku2 = new Buku("The Poneglyph", 1, 999999999, 2, "Kozuki Oden");
const olsop = new OnlineShop();

olsop.addProduct(pakaian1);
olsop.addProduct(pakaian2);
olsop.addProduct(buku1);
olsop.addProduct(buku2);
console.log(olsop.showCatalog());
console.log(olsop.addToCart("NVM", 1));
console.log(olsop.addToCart("Laughtale Map", 1));

console.log(olsop.showCart());
console.log(olsop.showCatalog());
console.log(olsop.transaction(10000000000, 3));
console.log(olsop.showCart());
