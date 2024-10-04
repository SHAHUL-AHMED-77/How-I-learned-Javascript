const boxes = document.querySelectorAll('.box')
const body = document.querySelector('body')

boxes.forEach((i)=>{
    i.addEventListener('click',(e)=>{
        console.log(e.target);
        if(e.target.id === "box1"){
            body.style.backgroundColor = "Red"
        }
        if(e.target.id === "box2"){
            body.style.backgroundColor = "blue"
        }
        if(e.target.id === "box3"){
            body.style.backgroundColor = "rgb(165, 0, 254)"
        }
        if(e.target.id === "box4"){
            body.style.backgroundColor = "rgb(51, 255, 0)"
        }
    })
})