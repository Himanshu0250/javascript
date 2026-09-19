if(true) {
    let a = 20
    const b = 10
    var c = 30
}
//console.log(a)// error
//console.log(b)//error
// console.log(c)// 30

// Nested Scope


function one() {
    const username = "abcd"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) // error because function two can take values from function one not function one take value from function two

    two() // abcd
}
// one()

if(true) {
    const username = "abcd"
    if(username === "abcd"){
        const website = " youtube"
        //console.log(username + website)
    }
    // console.log(website) // error
}
// console.log(username) error

// +++++++++++++++++++++++interesting++++++++++++++++++//
console.log(addone(5)) // 6
 function addone(num) {
    return num + 1
 }
 
console.log(addtwo(5)) // error
 const addtwo = function(num) {
    return num + 2
 }
 addtwo(5)