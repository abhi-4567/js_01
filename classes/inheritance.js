// class user{
//     constructor(username){
//         this.username=username
//     }
//     logMe(){
//         console.log(`${this.username} logged in`)
//     }
// }
// class Teacher extends user{        ...extends use karke methods sare 

//use kar sakte ho but  properties super use karke kar paoge
    
// }

// const teacher1=new Teacher()
// teacher1.logMe()


class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);