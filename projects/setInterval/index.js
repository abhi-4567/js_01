const start = document.getElementById('start')
const stop = document.getElementById('stop')

let interval
start.addEventListener('click',function(e){
   if(!interval){
     interval=setInterval(randomColor,1000)
   }
})

stop.addEventListener("click",function(e){
    clearInterval(interval)
    interval=null;
})

function randomColor(){
    const str = '0123456789ABCDEF'
    let hex='#'
    for(let index=0;index<6;index++){
        hex+=str[Math.floor(Math.random()*16)]
    }
    document.body.style.backgroundColor = hex
}