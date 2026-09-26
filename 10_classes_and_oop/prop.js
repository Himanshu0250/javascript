class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        return console.log(`UserNAme is ${this.username}`)
    }
    static createId(){
        return `123`
    }
}
const himanshu = new user("Himanshu")
// console.log(himanshu.createId())

class Teacher extends user{
    constructor(username , email){
        super(username)
        this.email = email
    }

}

const tea = new Teacher("himanshu", "Hi1223@gmail.com")
//tea.logMe()
console.log(tea.createId())