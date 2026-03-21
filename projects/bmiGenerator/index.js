document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault()
    const height=document.getElementById('height')
    const weight=document.getElementById('weight')
    const resultDiv=document.getElementsByClassName('result')
    const heightVal = parseInt(height.value)
    const weightVal = parseInt(weight.value)

    if(heightVal<0 || isNaN(heightVal) ){
        resultDiv[0].innerHTML=`PLEASE ENTER A VALID VALUE  NOT ${heightVal}`
    }
    else if(weightVal<0 || isNaN(weightVal)){
        resultDiv[0].innerHTML=`PLEASE ENTER A VALID VALUE  NOT ${weightVal}`
    }
   else{
     const result=((weightVal)/(heightVal)**2)*10000
    resultDiv[0].innerHTML = `BMI Value : ${result} `
    height.value=''
    weight.value=''
   }
})