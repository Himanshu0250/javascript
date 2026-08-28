const score = 400
console.log(score)// ouput will be 400

const balance = new Number(100)
console.log(balance)//output will be [Number: 100]

console.log(balance.toString().length)// output = 3
console.log(balance.toFixed(2))// output will be 100.00


const anotheNumber = 23.899
console.log(anotheNumber.toPrecision(3))//inside the precision the value should be 1-21 and it will start to pricise the value from the starting of the number so, output will be the 24 but if there is 3 at the place of the 2 then output will be the 23.9


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))// output will be 10,00,000

//*********************** Math *******************/

console.log(Math)
console.log(Math.abs(-4))// output will be 4
console.log(Math.round(4.3))// output = 4

console.log(Math.ceil(4.9))// output will be 5
console.log(Math.floor(4.9))// output will be 4
console.log(Math.max(2 , 4 , 6 ,8))// output = 8
console.log(Math.min(2 , 4, 6, 9))// output = 2

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)