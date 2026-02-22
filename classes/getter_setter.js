// class User {
//     constructor(email, password){
//         this.email = email;
//         this.password = password
//     }

//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(value){
//         this._email = value
//     }

//     get password(){
//         return `${this._password}hitesh`
//     }

//     set password(value){
//         this._password = value
//     }
// }

// const hitesh = new User("h@hitesh.ai", "abc")
// console.log(hitesh.email);

class user{
    constructor(username,email){
        this.username=username
        this.email=email
    }
    get username(){
        return `${this._username}abc`
    }
    set username(value){
        this._username=value
    }
    set email(value){
        this._email=value
    }
    get email(){
        return `${this._email.toUpperCase()}`
    }
}

const user1 = new user("abhi", "a@gamil.com")
user1.email()