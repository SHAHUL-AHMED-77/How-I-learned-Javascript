const user = document.querySelector('#gfield')
const sub  = document.querySelector('#sub')
const game = document.querySelector('#highlow')
const pchance = document.querySelector('#pguess')
const rchance = document.querySelector('#chances')
const startover = document.querySelector('.result')
const rem = document.querySelector('#remove')
const rem2 = document.querySelector('#remove-2')


let rnum = parseInt(Math.random()*100+1)
console.log(rnum);

const p = document.createElement('p');

let pguess = []

let rguess = 2

let gameon = true

if(gameon){
    sub.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess = parseInt(user.value)
        console.log(guess);
        Validateguess(guess)
    })
}

function Validateguess(g){
    if(isNaN(g)){
        alert('Invalid Number')
    }
    else if(g<1){
        alert('Number Should be Greater than 1')
    }
    else if(g>100){
        alert('Number Should be Less than 100')
    }
    else{
        pguess.push(g)
        if(rguess === 11){
            displayguess(g)
            displaymessage(`Game Over. The Random Number is ${rnum}`)
            endgame()
        }
        else{
            displayguess(g)
            Checkguess(g)
        }
    }
}

function Checkguess(g){
    if(g === rnum){
        displaymessage('Yay,You Guesses it Right')
        endgame()
    }
    else if(g < rnum){
        displaymessage('Guess is Too Low')
    }
    else if(g > rnum){
        displaymessage('Guess is Too High')
    }
}

function displayguess(g){
    user.value = ''
    pchance.innerHTML += `${g} | `
    rguess++;
    rchance.innerHTML = `${11-rguess}`
}

function displaymessage(m){
    game.innerHTML = `<h3>${m}</h3>`
}


function endgame(){
    user.value = ''
    user.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = '<button id="startgame">New Game</button>'
    startover.appendChild(p)
    gameon = false;
    startgame()
}

function startgame(){
    const ngame = document.querySelector('#startgame')
    ngame.addEventListener('click',(e)=>{
    rnum = parseInt(Math.random()*100+1)
    pguess =[]
    rguess = 1
    pchance.innerHTML = ''
    rchance.innerHTML = `${11-rguess}`
    user.removeAttribute('disabled');
    startover.removeChild(p);
    displaymessage('')
    gameon = true
    })
}