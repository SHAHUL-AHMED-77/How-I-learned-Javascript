const f = document.querySelector('form')

f.addEventListener('submit',(e)=>{
    e.preventDefault();

    const h = parseInt(document.getElementById('height').value)
    const w = parseInt(document.getElementById('weight').value)
    const res = document.querySelector('#result')

    if(h==="" || h<0 || isNaN(h)){
        res.innerHTML = "Invalid Height"
    }
    else if(w==="" || w<0 || isNaN(w)){
        res.innerHTML = "Invalid Weight"
    }
    else{
        const bmi = (w / ((h * h)/10000)).toFixed(2); 
        res.innerHTML = `Your BMI is ${bmi}`
    }
})