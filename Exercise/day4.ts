// no 1
const triangle = (height: number) => {
  for (let i = 1; i <= height; i++) {
    let temp: string = "";
    for (let j = 1; j <= i; j++) {
      temp += j + " ";
    }
    console.log(temp);
  }
};

triangle(5);

// no 2
const triangleV2 = (height: number) => {
  let temp: string = "";
  let num: number = 1;
  for (let i = 1; i <= height; i++) {
    let temp2: string = "";
    for (let j = 1; j <= i; j++) {
      temp2 += (num < 10 ? "0" : "") + num + " ";
      num++;
    }
    temp += temp2 + "\n";
  }
  temp.split("\n");
  return temp;
};
console.log(triangleV2(5));

// no 3
// fizz buzz

const fizzBuzz = (input: number) => {
  let temp: string[] = [];
  for (let i = 1; i <= input; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      temp.push("fizzbuzz");
    } else if (i % 5 === 0) {
      temp.push("buzz");
    } else if (i % 3 === 0) {
      temp.push("fizz");
    } else {
      temp.push(String(i));
    }
  }
  console.log(temp);
  return temp;
};
console.log(fizzBuzz(15));

// no 4
const inputWeight: number = 66;
const inputHeight: number = 170;
const heightBMI: number = inputHeight / 100;

const bmi = (wight: number, height: number) => {
  const bmiFormula: number = wight / height ** 2;
  if (bmiFormula < 18.5) {
    return "less weight";
  } else if (bmiFormula >= 18.5 && bmiFormula < 25) {
    return "ideal";
  } else if (bmiFormula >= 25 && bmiFormula < 30) {
    return "overweight";
  } else if (bmiFormula >= 30 && bmiFormula < 40) {
    return "very overweight";
  } else if (bmiFormula >= 40) {
    return "obesity";
  }
};

console.log(bmi(inputWeight, heightBMI));

// no 5
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const removeOdd = (numbers: number[]) => {
  return numbers.filter((input) => input % 2 === 0);
};
console.log(removeOdd(numbers));

// no 6
const str: string = "hello world jooo";

console.log(str.split(" "));
