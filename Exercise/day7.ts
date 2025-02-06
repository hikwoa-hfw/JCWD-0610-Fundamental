// no 1

const equalObject = (obj1: object, obj2: object) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  
  return true;
};

console.log(equalObject({ a: 1 }, { a: 1 }));

// no 2
const intersectionObject = (obj1: object, obj2: object) => {
  let objectOne: {} = {};
  for (let i = 0; i < Object.keys(obj1).length; i++) {
    if (Object.keys(obj1)[i] === Object.keys(obj2)[i]) {
      objectOne[Object.keys(obj1)[i]];
      console.log(objectOne[Object.keys(obj1)[i]]);

      for (let j = 0; j < Object.values(obj1).length; j++) {
        if (Object.values(obj1)[j] === Object.values(obj2)[j])
          objectOne[Object.keys(obj1)[i]] = Object.values(obj1)[j];
        console.log(objectOne);
      }
    }
  }
  return objectOne;
};

const objek = {};
console.log(objek["aku"]);
console.log((objek["aku"] = Object.values("xx")));

const a = { a: 1, b: 2 };
const b = { a: 1, c: 3 };

console.log(a["b"]);

console.log(intersectionObject(a, b));

// no 3
const mergeStudent = (
  arr1: { name: string; email: string }[],
  arr2: { name: string; email: string }[]
) => {
  let arrayOb = arr1.concat(arr2);

  arrayOb = arrayOb.filter(
    (value, index, array) =>
      index === array.findIndex((v) => equalObject(v, value))
  );
  return arrayOb;
};

const arr1 = [
  { name: "stud1", email: "stud1@mail.com" },
  { name: "stud2", email: "stud2@mail.com" },
];
const arr2 = [
  { name: "stud1", email: "stud1@mail.com" },
  { name: "stud3", email: "stud3@mail.com" },
];

console.log(mergeStudent(arr1, arr2));

// no 4

function switchObj(input: any[]) {
  return input.map((value) => {
    const switched = {};
    for (const key in value) {
      if (Object.keys(key)) {
        switched[value[key]] = key;
      }
    }
    return switched;
  });
}

console.log(
  switchObj([
    { name: "David", age: 20 },
    { age: 20, name: "cinta" },
  ])
);

// no 5
function factorialRecursion(input: number) {
  if (input === 1) {
    return 1;
  }

  return input * factorialRecursion(input - 1);
}

console.log(factorialRecursion(5));
