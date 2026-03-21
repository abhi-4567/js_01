let randomNum = parseInt(Math.floor(Math.random()*100+1))
const button = document.querySelector('#button')
const inputNum = document.querySelector('#number')

const result=document.querySelector('.result')
const prevGuess=document.querySelector('#prevGuess')
const remGuess=document.querySelector('#remGuess')
const final = document.querySelector('.final')
let cnt =10

function gameOver(){
    inputNum.setAttribute('disabled','')
    button.setAttribute('disabled','')
    
    final.innerHTML=`GAME OVER!!! <br>
                    <button id='newGame'>START NEW GAME</button>`
}

button.addEventListener("click",function(e){
    const guessedNum=parseInt(inputNum.value)
    if(guessedNum <0 || guessedNum>100 || isNaN(guessedNum)){
        result.innerHTML=`PLEASE ENTER A VALID NUMBER,NOT ${guessedNum}`
    }
    else if(guessedNum===randomNum){
        result.innerHTML=`YOU GUESSES IT RIGHT!!! The number is ${guessedNum}` 
        inputNum.value=''
        gameOver()
    }else{
        cnt--
        result.innerHTML=`NO!!! ${guessedNum}`
        prevGuess.innerHTML += `${guessedNum}  `
        remGuess.innerHTML = `Guesses Remaining : ${cnt}`
        if(cnt == 0){
            gameOver()
            
        }
        inputNum.value=''
    }

})

document.addEventListener('click',function(e){
   if(e.target.id === 'newGame'){
     inputNum.removeAttribute('disabled')
    button.removeAttribute('disabled')
    randomNum = parseInt(Math.floor(Math.random()*100+1))
    prevGuess.innerHTML = 'Previous Guesses : '
    remGuess.innerHTML = `Guesses Remaining : 10`
    result.innerHTML=''
    final.innerHTML=''
    cnt =10
   }
})