const randcolor = ()=>{
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i=0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};
let interval;
const changebg = ()=>{
    if(interval != null){
        document.body.style.backgroundColor = randcolor()
    }
}
const startchange = ()=>{
    interval = setInterval(changebg,1000)
}
const stopchange = ()=>{
    clearInterval(interval)
    interval = null;
}
document.querySelector('#start').addEventListener('click',startchange)

document.querySelector('#stop').addEventListener('click',stopchange)

