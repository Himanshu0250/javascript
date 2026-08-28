const name = "Himanshu"
const repoCount = 5

console.log(name + repoCount + "Value") // output will be Himanshu5Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // best way


const gameName = new String('hillClimb')// string decleration 

console.log(gameName[0])// output = h
console.log(gameName.__proto__)// output = { }

console.log(gameName.length)// 9
console.log(gameName.toUpperCase())// HILLCLIMB

console.log(gameName.charAt(2))// Means that at index 2 which character so, there output will be 'l'

console.log(gameName.indexOf("l"))// jut reverse of the above output will be 2


const newString = gameName.substring(0,4)// if we give negative value then it will not accpet and will start from 0 index 
console.log(newString)// output will be 0-3 hill

const anotherString = gameName.slice(-8 ,4)// it accept negative values and will start slicing  from the back side 
console.log(anotherString) 


const newStringOne = "     Himanshu.   "
console.log(newStringOne)// output will.    Himanshu
console.log(newStringOne.trim())// output will be Himanshu


const url = "https://himanshu.com/himanshu%20Gangwar"

console.log(url.replace('%20','-'))// 20% will be replaced by -

console.log(url.includes("himanshu"))// output will be true
console.log(url.includes("Bombay"))// output will be false 


console.log(gameName.split('-'))