let a = 10                   // Global Scope variables
const b = 100         
// var c = 100

function sample(){
    let a = 20
    const b = 200          // Local Scope Variables
    console.log("Local :",a);
    console.log("Local :",b);
}
sample()
if(true){
    var c = 2000      // Reason to avoid using Var
}
console.log(a);
console.log(b);
console.log(c);

// Nested Functions

function one(){
    const user = "Lucy"

    function two(){
        const id = 123445
        console.log(id);               // Function two can access the variables one function
        console.log(user);             // But one cannot access the variables in Two Functions
    }
    // console.log(id);
    
    two()
}
one()

// Function with If :

function three(){
    const a1 = 100
    
    if(true){
        a2 = 10000
        console.log(a1);
    }
    console.log(a2);    
}
three()


// Nested ifs :

if(true){
    const b1 = 1000
    if(b1==1000){
        const b2 = 2000
        console.log(b1+b2);
    }
    // console.log(b2);
}
// console.log(b1);


// Mini Hoisting

console.log(addone(10));  // No Error

function addone(n){
    return n + 1
}
console.log(addone(5));


// console.log(tw(5))   // Error

const tw = function(n){
    return n + 2
}
console.log(tw(5))
