// primitive datatype :- (these all are call by)
                    // these are 7 types 
                    //**  string , Number , Boolean , Null, undefined , symbol , bigint */

// Non primitive(by Reference)
/** 
 Array , objects , functions
 */

 const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}


const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);



/**************************** Memory ****************/


// stack(in all primitive opertor we use stack memory) , Heap(in all non primitive operator we use heap memory)

let myyoutubeName = "Himanshugangwar.com"

let anotherName = myyoutubeName
anotherName = "Himanshu"

console.log(anotherName)// Himanshu
console.log(myyoutubeName)// himanshuGangwar.com