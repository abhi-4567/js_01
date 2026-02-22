
// function User(email, password){
//     this._email = email;
//     this._password = password

//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     })

// }

// const chai = new User("chai@chai.com", "chai")

// console.log(chai.email);

function user(username,email){
    this._username=username
    this._email=email
    Object.defineProperty(this,'username',{
        get:function(){
            return `${this._username}abc`
        },
        set:function(value){
            this._username=value
        }
    })

}
const user1=new  user("abhi","a@gmail.com")
console.log(user1.username)
