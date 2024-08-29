
// Object iterals
const sym = Symbol('one')  // Symbol Declaration


const obj ={
    name:"Shahul",
    Age:18,
    [sym] : "Good Morning",   // [] is used for accessing Symbols in Objects
    Email:"Shahul@gmail.com",
                                    // Both are same
    "Full name" : "Shahul Ahmed"
}

console.log(obj)

// Accessing Object Elements

console.log(obj.name);   // Method-1 

// console.log(obj.full name);         // can be accessed using []


console.log(obj["Age"]);    // Method-2

console.log(obj["Full name"]);

// console.log(typeof obj[sym]);

console.log(obj[sym]);


// Object freeze

const one = {
    name:"Lucy",
    id:34,
    Email:"Lucy@email.com"
}

one.id = 55   // Changing Value in the Object

Object.freeze(one)   // No Changes can be to the object after Freezing

one.id =80    // This change will Not be performed , Due to Freeze

console.log(one);


// Function Declaration Using Objects

const fun = {
    name:"Lucifer"
}

fun.greeting = function(){
    console.log("Hello Bro...");
    
}

fun.greeting1 = function(){
    console.log(`Hello ${this.name}`);  // "this" is used for referencing to the current object key
    
}
// console.log(fun[greeting()]);  // Wrong method
console.log(fun.greeting()); 

console.log(fun.greeting1());
