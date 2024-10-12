// Object Literal

const obj = {
    username:"Lucy",
    Id:4567,
    Country:"India",
    sample :function sam(){
        console.log(`Country is ${this.Country}`);  // This refers to current context which is obj here
    },
    fun:()=>{
        console.log(`${obj.username} Id is ${obj.Id}`);
    }
}
console.log(obj.username);
obj.fun()
obj.sample()

//Constructor Function :-
        // It always gives an new Instance value using "new" 

function construct(name,id,age){
    this.name = name
    this.id = id
    this.age = age
    return this
}
const one = new construct("luffy",400,19) 
// const two = construct("shanks",900,45)     // Values will overwritten
const two = new construct("shanks",900,45)     // new Instance will be created 

// const three = construct('a',76,9)
console.log(one);
console.log(two);
console.log(three);
console.log(one instanceof construct); 
console.log(two instanceof construct); 
// console.log(three instanceof construct);  //False


// -> when a new is called a empty object will be created 
// -> Constructor function will be called due to new 
// -> this will injected into the constructor
// -> Will be Available in the function