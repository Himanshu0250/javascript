const myArr = [0,1,2,3,4,5]

const myHeros = ["Ironman" , "Captain America" , "Superman"]

const myArr2 = new Array(1 , 2 , 3 , 4)

//console.log(myArr[0])

// method of array

//myArr.push(6)// output will be [0,1,2,3,4,5,6]
//myArr.push(7)// output will be [0,1,2,3,4,5,6,7]
//myArr.pop()// output will be [0,1,2,3,4,5,6]

myArr.unshift(9)// output will be [9,0,1,2,3,4,5]
myArr.shift()// in this we don't give parameter like unshift and output will be [0,1,2,3,4,5]

console.log(myArr.includes(9))// output will be false
console.log(myArr.indexOf(99))// it will tells about the index of the give parameter if it exist otherwise it will give -1 as output 

const newArr = myArr.join()

console.log(newArr)// value will be same but the datatype of this will change now it become string 
console.log(myArr)

// slice , splice

console.log("A ", myArr);// output is A [0,1,2,3,4,5]

const myn1 = myArr.slice(1, 3)

console.log(myn1);// output will be [1,2]
console.log("B ", myArr);// output will be B [0,1,2,3,4,5]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); // output will be C [0,4,5]
console.log(myn2);// output will be [1,2,3]
