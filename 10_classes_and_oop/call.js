

function SetUserName(username){
    // complex DB cells
    this.username = username
    console.log("called")
}

function createUser(username , email, password){
    SetUserName.call(this, username)

    this.email = email
    this.password = password
}
const abc = createUser("Himanshu" , "abc@email.com", "133")
console.log(abc)