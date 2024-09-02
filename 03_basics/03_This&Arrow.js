const one = {
    user : "Shahul",
    Id : "2345",
    message : function(){
        console.log(`Name is ${this.user}`);  // "This" is Used for accessing the current Context 
        console.log(this);
        
    }
}

one.message()       // Name is Shahul
one.user = "Lucy"   // Current Context now
one.message()       // Name is Lucy
console.log(this);  // Empty Object as it is an Node Env

function exm() {
    console.log(this);    
}
exm()
// Note : If the above command in browser it will return Window Object


const hi1 = function (){
    let username = "bro"
    console.log(username);
}
hi1()       

const hi = () => {          // same above function written using arrow function
    let username = "bro"
    console.log(this.username);
}
hi()       

const addthree = (a,b,c) => {
        return a+b+c            // Explicit Return
}
console.log(addthree(3,6,7));

// Implicit Return 

const four = (a,b,c,d) => a+b+c+d

console.log(four(1,2,3,4));


const obj = () => ({user:"Hello"})

console.log(obj());

const obj1 = () => ["Hello",123]

console.log(obj1());

const sample = () => {
    console.log(this);
}
sample()