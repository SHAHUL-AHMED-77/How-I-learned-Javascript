const time = document.getElementById('time')

setInterval(() => {
    let date = new Date()
    time.innerHTML = date.toLocaleTimeString()    
}, 1000);