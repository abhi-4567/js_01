"use strict"

// const myArr = [1, "abhinav", true]
// const myArr1 = new Array(3,"aryan",false)
// // console.log(myArr)
// // console.log(typeof myArr)
// // console.log(myArr[2])

// // myArr.push("lakhan")
// // console.log(myArr)
// // myArr.push(6)
// // console.log(myArr)
// // myArr.pop()
// console.log(myArr)

// console.log(myArr.shift())
// console.log(myArr)
// console.log(myArr.unshift(2,"gunno"))
// console.log(myArr)

// console.log(myArr.join())   //if nothing , but to have nothing in ans ""
// console.log(myArr1.join(""))

// console.log(myArr.slice(0,2)) //slice does not alter like splice 
// console.log(myArr)

// console.log(myArr1.splice(0,2)) //slice--> start,end    splice-->start,count
// console.log(myArr1)



const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh")) to convert to array
// console.log(Array.from({name: "hitesh"})) // interesting have to specify

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));