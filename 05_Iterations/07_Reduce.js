//Reduce

const num = [1,2,3,4]
let intialval = 0
const sum = num.reduce((a,cv)=>{
    console.log(`accumulator is ${a} and Current Value is ${cv}`);
    return a + cv
},intialval)
console.log(sum);


scart = [
    {
        item:"ball",
        price:299
    },
    {
        item:"laptop",
        price:29999
    },
    {
        item:"table",
        price:2999
    },
]

cart_sum = scart.reduce((a,items)=>{
    return a + items.price
},0)
console.log(`Your cart value is ${cart_sum}`);
