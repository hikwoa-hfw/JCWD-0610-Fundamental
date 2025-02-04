// no 1
const arr: number[] = [12, 5, 23, 18, 4, 45, 32];
const sortFn = (arr: number[]) => {
  const lowest = arr.sort((a, b) => a - b)[0];
  const highest = arr.sort((a, b) => b - a)[0];
  const average = arr.reduce((a, b) => a + b) / arr.length;
  const result = `lowest: ${lowest}, highest: ${highest}, avg: ${average}`;
  return result;
};
console.log(sortFn(arr));

const sortNF = (arr: number[]) => {
  const average = arr.reduce((a, b) => a + b) / arr.length;
  let max: number = arr[0];
  let min: number = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return `lowest: ${min}, highest: ${max}, average: ${average}`;
};

console.log(sortNF(arr));

// no 2
const arr2: string[] = ["apple", "banana", "cherry", "date", "k", "k"];

const concating = (str: string[]) => {
  let temp: string = "";
  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1) {
      temp += "and " + str[i];
      continue;
    }
    temp += str[i] + ", ";
  }
  return temp.trim();
};

console.log(concating(arr2));

// no 3
const arrNum: number[] = [5, 3, 1, 7, 6];
const sort2 = (arr: number[]) => {
  return arr.sort((a, b) => a - b)[1];
};

console.log(sort2(arrNum));

// no 4
const nums1: number[] = [1, 2, 3];
const nums2: number[] = [3, 2, 1];

const calcTwo = (nums1: number[], nums2: number[]) => {
  const result: number[] = [];
  for (let i = 0; i < nums1.length && nums2.length; i++) {
    result.push(nums1[i] + nums2[i]);
  }
  return result;
};
console.log(calcTwo(nums1, nums2));

//  no 5
const arr3: number[] = [1, 2, 3, 4];
const newEll: number = 9;
const addEll = (input: number[], newEll: number) => {
  if (newEll === undefined || newEll === null) {
    return input;
  }

  if (input.indexOf(newEll) === -1) {
    input.push(newEll);
  }
  return input;
};

console.log(addEll(arr3, newEll));

// no 6
const mixedArr = ["3", 1, "string", null, false, undefined, 2];
const calcMixArr = (mixedArr: any[]) => {
  let result = 0;
  for (let i = 0; i < mixedArr.length; i++) {
    if (typeof mixedArr[i] === "number") {
      result += mixedArr[i];
    }
  }
  return result;
};

console.log(calcMixArr(mixedArr));

// no 7
const maxSize: number = 4;
const maxArray = (maxSize: number, ...int: number[]) => {
  const result: number[] = [];
  for (let i = 0; i < maxSize; i++) {
    result.push(int[i]);
  }
  return result;
};

console.log(maxArray(maxSize, 5, 10, 24, 3, 6, 7, 8));

// no 8
const arr4: number[] = [1, 2, 3];
const arr5: number[] = [4, 5, 6];
const conArray = (arr1: number[], arr2: number[]) => {
  return arr1.concat(arr2);
};

console.log(conArray(arr4, arr5));

// no 9
const arr6: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 5, 5, 5];
const nonUnique = (array: number[]) => {
  return [...new Set(array.filter((value, i, a) => a.indexOf(value) !== i))];
};

console.log(nonUnique(arr6));
// loop setiap elemen dalam array
const findDuplicates = (arr: number[]) => {
    const duplicates: number[] = []
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
// cek apakah angka sudah muncul dalam array
    let count: number = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === currentNumber) {
        count++;
      }
    }
    // jika mucnul lebih dr 1 maka masukkan dalam var baru
    if (count> 1 && !duplicates.includes(currentNumber)){
        duplicates.push(currentNumber)
    }
  }
  return duplicates
};

console.log(findDuplicates(arr6));

// no 10
const arr7: number[] = [1, 2, 3, 4, 5];
const arr8: number[] = [3, 4, 5, 6, 7];
const slicer = (arr1: number[], arr2: number[]) => {
  return arr1
    .filter((value) => !arr2.includes(value))
    .concat(arr2.filter((value) => !arr1.includes(value)))
    .sort((a, b) => a - b);
};

console.log(slicer(arr7, arr8));

const findDif = (arr1: number[], arr2: number[])=> {
    const difference: number[] =[]

    for(const item of arr1 ){
        if (!arr2.includes(item) && !difference.includes(item)){
            difference.push(item)
        }
    }

    for (const item of arr2){
        if ( !arr1.includes(item) && !difference.includes(item)){
            difference.push(item)
        }
    }

    return difference
}

// no 11
const randArr: any[] = [1, [], undefined, {}, "string", {}, []];
const primitive = (array: any[]) => {
  let result: any[] = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "object") {
      result.push(array[i]);
    }
  }
  return result;
};
console.log(primitive(randArr));

// no 12
const arr9: number[] = [10, 20, 40, 10, 50, 30, 10, 60, 10, 10, 10, 10];
const sumDupli = (input: number[]) => {
  const dupli = input.filter((x) => input.indexOf(x) !== input.lastIndexOf(x));
  return dupli.reduce((a, b) => a + b);
};
console.log(sumDupli(arr9));

const sumDuplicates = (input: number[])=> {
    const seen: number[] = []
    const duplicate: number[] = []
    let result: number = 0

    for(const value of input){
        if(seen.includes(value)){
            if(!duplicate.includes(value)){
                duplicate.push(value)
            }
        }else {
            seen.push(value)
        }9
    }

    for (const value of input){
        if( duplicate.includes(value)){
            result+= value
        }
    }

    return result
}

console.log(sumDuplicates(arr9));


// no 13
const game = (input: "rock" | "paper" | "scissor") => {
  let computer: string = "";

  const probe: number = Math.random() * 3;

  if (probe > 0 && probe <= 1) {
    computer = "rock";
  } else if (probe > 1 && probe <= 2) {
    computer = "scissor";
  } else if (probe > 2 && probe <= 3) {
    computer = "paper";
  }

  if (computer == input) return "draw";

  if (computer == "paper" && input == "scissor") {
    return "You Win";
  } else if (computer == "rock" && input == "paper") {
    return "You Win";
  } else if (computer == "scissor" && input == "rock") {
    return "You Win";
  } else {
    return "jancok kalah";
  }
};

console.log(game("paper"));
