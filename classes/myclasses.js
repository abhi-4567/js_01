// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}`
//     }
// }
//  const user1=new User('abhi',"a@gmail.com",123)
//  console.log(user1.encryptPassword())


//behind the scene

function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}
User.prototype.encryptPassword = function(){
    return `${this.password}`
}

const user1=new User("abhi","a@gmail.com",123)
console.log(user1.encryptPassword())