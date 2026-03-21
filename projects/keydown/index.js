window.addEventListener('keydown',function(e){
    document.getElementById('container').innerHTML=`
    <table border='10px'>
        <tr>
            <th>key</th>
            <th>Code</th>
            <th>keycode</th>
        </tr>
        <tr>
            <td>${e.key}</td>
            <td>${e.code}</td>
            <td>${e.keyCode}</td>
        </tr>
        
    </table>`
})