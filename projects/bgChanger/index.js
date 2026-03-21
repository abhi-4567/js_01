document.getElementById('boxes').addEventListener('click',function(e){
    if(e.target.classList.contains('colorBox')){
        document.body.style.backgroundColor = e.target.id;
    }
})