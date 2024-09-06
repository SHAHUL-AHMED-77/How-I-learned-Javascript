const user = "Lucy"

if(user){
    console.log("Valid");
}else{
    console.log("Invalid");
    
}

// Falsy Values :  "" , 0 ,-0 ,null , undefined, false, BigInt 0n, NAN

// Truthy Values : " ", "0", "false", {}, [], function(){}


//Empty Array :

const arr = [1,2]

if(arr.length === 0){
    console.log("Array is empty");
}


//Object Empty :

const obj = {}

if(Object.keys(obj).length === 0){
    console.log("Object is Empty");
    
}


// Nullish Coalescing Operator (??)

let val ;

// val = 10 ?? 20
// val = null ?? 30
// val = undefined ?? 40
// val = 10 ?? 20 ?? 30
val = null ?? undefined ?? 70       // Takes the First Value
console.log(val);


// Terniary Operator 

// condition ? true : false

const h = 100

h >= 50 ? console.log("Greater than 50") : console.log("Less than 50");

