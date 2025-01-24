// no 1
const rectangleLength: number = 5;
const rectangleWidth: number = 3;

const rectangleArea: number = rectangleLength * rectangleWidth;
console.log(rectangleArea);

// no 2

const rectanglePerimeter: number = 2 * rectangleLength + 2 * rectangleWidth;
console.log(rectanglePerimeter);

// no 3

const radius: number = 5;
const diameter: number = radius * 2;
const circumference: number = Math.PI * diameter;
const circleArea: number = radius ** 2 * Math.PI;
console.log(circleArea);
console.log(circumference);
console.log(`diameter= ${diameter}, circumference= ${circumference}, area= ${circleArea} `);


// no4

const a: number = 80;
const b: number = 65;
const angles: number = 180-(a+b)

console.log(angles);

// no 5
const oneYear: number =365
const oneMonth: number =30
const day1: number = 400
const day2: number = 366

const day1ToYear: number = Math.round(day1/oneYear)
const day1ToMonth: number = Math.round(day1%oneYear/oneMonth)
const day1ToDay: number = day1%oneYear%oneMonth
const result1: string = `${day1ToYear} year(s), ${day1ToMonth} month(s), ${day1ToDay} day(s)`
console.log(result1);



const day2ToYear: number = Math.round(day2/oneYear)
const day2ToMonth: number = Math.round(day2%oneYear/oneMonth)
const day2ToDay: number = day2%oneYear%oneMonth
const result2: string = `${day2ToYear} year(s), ${day2ToMonth} month(s), ${day2ToDay} day(s)`
console.log(result2);



// no 6
const date1: Date = new Date("2022-01-20")
const date2: Date = new Date("2022-01-27")
const milisecond: number = date2.getTime()-date1.getTime()
const differenceDates: number = Math.abs(milisecond/1000/24/60/60)
console.log(differenceDates);
