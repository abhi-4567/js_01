"use strict"
// const obj = {
//     name : "abhinav",
//     age : 20,
//     getMessage: function(){
//         console.log(`${this.name} just logged in`)
//         console.log(this)

//     }//this explains current context
// }
// obj.getMessage()
// // console.log(this)
// obj.name = "aryan"
// obj.getMessage()


function chai(){
    let user = "hitesh"
    console.log(this.username);//this works in obj not in function
}

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


const sTwo =  (num1, num2) => (num1+num2)

// console.log(sTwo(2,3))

const  myFunc = () => ({username : "abhi"})

// console.log(myFunc())

