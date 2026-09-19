function sayMyName() {
    console.log("H")
    console.log("I")
    console.log("M")
    console.log("A")
    console.log("N")
    console.log("S")
    console.log("H")
    console.log("U")

}
// sayMyName()

// function sumNum(num1 , num2) {
//      console.log(num1 + num2);
// }
function sumNum(num1 , num2) {
    //  let result = num1 + num2
    //  return result
      
    return num1 + num2
}
const result = sumNum(3 , 4) // 7
// sumNum(2 , "a")//2a
//console.log("Result : " , result)// Result: undefined

function loginUserMessage(username) {
    if(!username){
        // console.log("please enter a username ")
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Himanshu"))
// console.log(loginUserMessage()) // undefined

function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(200 , 400 , 500))// ... way of passing multiple values in function

function calculateCartPrice(val1 , val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200 , 400 , 500, 2000))// output will be [500 , 2000] because 200 is val1 and 400 is val2 and other value stored in num1

const user = {
    username: "abc",
    price: 200
}
function handleObjects(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// console.log(handleObjects(user))
handleObjects ({
    username : "ced",
    price: 50
    
})


const myArr = [200 , 400 , 100 , 600]

function returnSecondValue(getArr){
    return getArr[1]
}
// console.log(returnSecondValue(myArr))

