// for of loop
// ["" ,"" , ""]
// [{} , {} , {}]

const arr = [1,2,3,4,5,6,7]
 for (const num of arr) {
    // console.log(num)
 }

 const greeting = "Hello World!"
 for (const chara of greeting) {
    // console.log(`the value of ${chara}`)
    
 }
 // Map

const map = new Map()
map.set('In', "india")
map.set('Fr', "France")
map.set('USA', "United state of America")

// console.log(map)

// for (const key of map) {
//     console.log(key) // output will be array
// }
for (const [key,value] of map) {
    console.log(key ,':-', value) // output will be normal keys of the map
}
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key,value] of myObject) {
    // console.log(key , ':-', value) // error because we cant iterate the object like this 
}
