const user = {
    username: "abcd",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }

}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this)// ouput {}

function any() {
    let username = "def"
    console.log(this.username)
}
any()

const any = () => {
    let username = "def"
    console.log(this)
}
any()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// const addTwo = (num1 , num2) => num1 + num2

// const addTwo = (num1 , num2) => (num1 + num2)

const addTwo = (num1 , num2) => ({username: "abcd"})
console.log(addTwo(3 , 4))