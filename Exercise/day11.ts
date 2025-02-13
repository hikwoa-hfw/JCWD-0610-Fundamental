// no 2
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
    // jika mucnul lebih dr 1 maka masukka{n dalam var baru
    if (count> 1 && !duplicates.includes(currentNumber)){
        duplicates.push(currentNumber)
    }
  }
  const unique = arr.map((value, index, x) => {
    if (x !== (duplicates)){
        return value
    }
  })
  console.log(Number(duplicates));
  
  return unique
};

console.log(findDuplicates([2,2,1]));
