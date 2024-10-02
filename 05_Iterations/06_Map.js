// Map

const num = [1,2,3,4,5,6,7,8,9]

const numbers = num.map((i)=>{
    return i+10
})
console.log(numbers);


//Chaining 

const n = [1,2,3,4,5]

const result = n.map((i)=>i*10)
                .map((i)=>i*5)
                .filter((i)=>i>100)
                .map((i)=>i+1)
console.log(result);
