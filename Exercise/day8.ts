// no 1

class Employee {
  name: string;
  workingHour: number = 0;
}

class FulltimeEmployee extends Employee {
  salary: number = 0;
  salaryPerHour: number = 100_000;

  constructor(name: string) {
    super();
    this.name = name;
  }

  addWorkingHour(input: number) {
    this.workingHour += input;
    return `Sukses menambah jam kerja ${input}. Total jam kerja adalah ${this.workingHour}`;
  }

  calculateSalary() {
    if (this.workingHour > 6) {
      this.salary =
        (this.workingHour - 6) * 75000 +
        (this.workingHour - (this.workingHour - 6)) * this.salaryPerHour;
      return `Gaji ${this.name} sebesar ${this.salary}`;
    } else {
      this.salary = this.workingHour * this.salaryPerHour;
      return `Gaji ${this.name} sebesar ${this.salary}`;
    }
  }
}

class ParttimeEmployee extends Employee {
  salary: number = 0;
  salaryPerHour: number = 50_000;

  constructor(name: string) {
    super();
    this.name = name;
  }

  addWorkingHour(input: number) {
    this.workingHour += input;
    return `Sukses menambah jam kerja ${input}. Total jam kerja adalah ${this.workingHour}`;
  }

  calculateSalary() {
    if (this.workingHour > 6) {
      this.salary =
        (this.workingHour - 6) * 30000 +
        (this.workingHour - (this.workingHour - 6)) * this.salaryPerHour;
      return `Gaji ${this.name} sebesar ${this.salary}`;
    } else {
      this.salary = this.workingHour * this.salaryPerHour;
      return `Gaji ${this.name} sebesar ${this.salary}`;
    }
  }
}

const cahyo = new FulltimeEmployee("cahyo");
console.log(cahyo.addWorkingHour(2));
console.log(cahyo.addWorkingHour(2));
console.log(cahyo.addWorkingHour(2));
console.log(cahyo.addWorkingHour(2));

console.log(cahyo.calculateSalary());

const haikal = new ParttimeEmployee("haikal");

console.log(haikal.addWorkingHour(3));
console.log(haikal.addWorkingHour(3));
console.log(haikal.addWorkingHour(3));

console.log(haikal.calculateSalary());

// no 2
class Player {
  name: string;
  heatlh: number;
  power: number;

  constructor(name: string) {
    this.name = name;
  }

  damage(power: number) {
    this.heatlh -= power;
  }

  useItem(input: string) {
    if (input === "Spirit Vessel") {
      this.heatlh += 10;
    } else if (input === "Bow of Longbowman") {
      this.power += 10;
    }
  }

  showStatus() {
    return { Nama: this.name, HP: this.heatlh, Power: this.power };
  }
}

class ShootingGame {
  player1: Player;
  player2: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
    player1.heatlh = 100;
    player2.heatlh = 100;
    player1.power = 10;
    player2.power = 10;
  }

  getRandomItem1() {
    const random: number = Math.round(Math.random());
    let item: string = "";
    if (random === 0) {
      item = "Spirit Vessel";
    } else {
      item = "Bow of Longbowman";
    }
    this.player1.useItem(item);
    return `Mendapatkan item ${item} dan otomatis digunakan`;
  }
  getRandomItem2() {
    const random: number = Math.floor(Math.random() * 2);
    let item: string = "";
    if (random === 0) {
      item = "Spirit Vessel";
    } else {
      item = "Bow of Longbowman";
    }
    this.player2.useItem(item);
    return `Mendapatkan item ${item} dan otomatis digunakan`;
  }

  shoot1() {
    this.player1.damage(this.player2.power);
    return `Ouch kena deh kamu 1`;
  }
  shoot2() {
    this.player2.damage(this.player1.power);
    return `Ouch kena deh kamu 2`;
  }

  start() {
    console.log("GAZ");
    let turn: boolean = Math.random() >0.5;
    while (this.player1.heatlh > 0 && this.player2.heatlh > 0) {
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());
      if (turn) {
        console.log(this.getRandomItem1());
        console.log(this.shoot2());
        turn = !turn;
      } else {
        console.log(this.getRandomItem2());
        console.log(this.shoot1());
        turn = !turn;
      }
    }
    if (this.player1.heatlh > 0) {
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());
      return `${this.player1.name} is the Winner`;
    } else {
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());
      return `${this.player2.name} is the Winner`;
    }
  }
}

const PLayer1 = new Player("p1");
const PLayer2 = new Player("p2");

const game = new ShootingGame(PLayer1, PLayer2);
console.log(PLayer1.showStatus());
console.log(game.start());
