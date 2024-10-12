
// function real(name){
//     this.name= name
// }
// real.prototype.reallength = function (){
//     return this.name.trim()
// }

// let user= new real("Lucifer     ")

// console.log(user.reallength().length);


Object.prototype.reallength = function (){
    return this.trim()
}
let text = "Hello     "
console.log(text.reallength().length);


const arr = ["Luffy","Shanks"]

const obj = {
    name:"Eren",
    fname:"Eren yeager",
    sample:function(){
        console.log(`Name is ${this.fname}`); 
    }
}

Object.prototype.print = ()=>{
    console.log("Anime is good");
}
arr.print()
obj.print()

Array.prototype.show = ()=>{
    console.log("Anime is very good");
}
arr.show()
// obj.show()


//  Inheritance


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax Of above will be :-
Object.setPrototypeOf(TeachingSupport, Teacher)

//String Prototype

String.prototype.len = function(){
    console.log(`OG length is :- ${this.length}`);
    console.log(`Actual Length is :- ${this.trim().length}`);
}
const sam = "Zoro     "
sam.len()
"Lucifer    ".len()


function bro(string){
    return string.trim().length
}
console.log(bro("Lucifer    "))


