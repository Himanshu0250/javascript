let score = "33abc"

//console.log(typeof score)// string
//console.log(typeof (score))//string

let valueNumber = Number(score)
//console.log(typeof valueNumber)//number
//console.log(valueNumber) // output will me NaN 

let isLoggedIn = 1

let booleanLoggedIn = Boolean(isLoggedIn)
//console.log(booleanLoggedIn)//true

// 1 => true and 0 => false
// " "(empty string) => false
// "Himanshu"=> true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber) // string
console.log(stringNumber)// 33

// ******************* operations ******************//

let value = 3
let negValue = -value
console.log(negValue)

//console.log(2 + 2)
//console.log(2 - 2)
//console.log(2 * 2)
//console.log(3 % 2)
//console.log(4 / 2)
//console.log(2 ** 3)// means 2 to the power 3

let str1 = "himanshu"
let str2 = " gangwar"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2) // output will be 12
console.log(1 + "2") // ouput will be 12
console.log("1" + 2 + 2)// output will be 122
console.log(1 + 2 + "2") // output will be 32


console.log(true) // output will be true
console.log(+true)// output will be 1
console.log(+"")// output will be 0

let num1 , num2 

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
//++gamecounter// output will be 101
console.log(gameCounter)