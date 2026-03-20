// function walkTheDog(callback){
//     setTimeout(function(){
//         console.log('the dog  walks')
//         callback()
//     },1000)
        
// }
// function cleanTheCar(callback){
//     setTimeout(function(){
//         console.log("the car is cleaned")
//         callback()
//     },500)
// }
// function trashTakeOut(){
//     setTimeout(function(){
//         console.log('the trash is taken out')
//     },1500)
// }
// walkTheDog(cleanTheCar)   /*..it calls cleanTheCar(trashTakeOut)
// cleanTheCar(trashTakeOut) .....not done
// trashTakeOut()

// walkTheDog(function(){
//     cleanTheCar(function(){
//         trashTakeOut()
//     })
// })


//new Promise(function(resolve,reject){
//     const error=true
//     if(!error){
//         resolve('executed!!')
//     }
//     else{
//         reject('error')
//     }
// }).then((value)=>console.log(value))
//   .catch((error)=>console.error(error))
//   .finally(()=>console.log('good!!!!'))


function walkTheDog(){
    return new Promise(function (resolve,reject){
    setTimeout(function(){
        const dogWalks = true
        if(dogWalks==true){
            resolve('the dog  walks')
        }else{
            reject('no dog did not waalk')
        }
        
    },1000)
}
)
} 

function cleanTheCar(){
    return new Promise(
    function (resolve,reject){
     setTimeout(function(){
        const cleanTheCar = true
        if(cleanTheCar == true){
            resolve('the car iss cleaned')
        }else{
            reject("car not cleaned")
        }
        
        
    },500)
}
) }

function trashTakeOut1(){
    return new Promise(
    function (resolve,reject){
     setTimeout(function(){
        const trashTakeOut=true
        if(trashTakeOut==true){
            resolve('the trash is taken out')
        }else{
            reject("the car not cleaned")
        }
      
    },1500)
}
)}

// walkTheDog().then((value)=> {console.log(value); return cleanTheCar()})
//            .then((value)=>{console.log(value); return trashTakeOut()})
//            .then((value)=>console.log(value))
//           .catch((error)=>console.error('error :',error))
//           .finally(()=>console.log('done'))

async function trashTakeOut(){
    try{
        const response = await walkTheDog()
        console.log(response)
        const response1 =await cleanTheCar()
        console.log(response1)
        const response2=await trashTakeOut1()
        console.log(response2)
    }catch(error){
        console.log('error :', error)
    }
}
trashTakeOut()