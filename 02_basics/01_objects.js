// singleton
// when we create a object from literal then it will be singleton but when we will create a constructor then it will be singleton
//object literals

const  mySym = Symbol("key1")
const JsUser = {
    name: "Himanshu",
    [mySym]: "mykey1",
    age : 18,
    location : "Jodhpur",
    email : "himanshu@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , " saturday"]
} 
// console.log(JsUser.email)
// console.log(JsUSer[email]) /// it will error 
// console.log(JsUser["email"]) // give himanshu@gmail.com
// console.log(JsUser[mySym])

JsUser.email = "himanshu123@gmail.com" // email will change to this email
// Object.freeze(JsUser)
JsUser.email = "himanshu@iitj.ac.in"
// console.log(JsUser)


JsUser.greeting1 = function() {
    console.log("Hello Js User");
}
JsUser.greeting2 = function() {
    console.log(`Hello Js User, ${this.name}`);
}
// console.log(JsUser.greeting1())
// console.log(JsUser.greeting2())


const  course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "adcdef" 
}
//course.courseInstructor // abcdef 
const{courseInstructor : instructor} = course // it will change the courseInsructor to instructor it is called as object destructuring
console.log(instructor)// abcdef

// const navbar = ({company}) => {

// }
// navbar(company = "himanshu")

