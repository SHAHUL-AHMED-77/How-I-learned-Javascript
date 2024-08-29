// const appuser = new Object()
                                    // both are same
const appuser = {}

console.log(appuser);

appuser.id = "12abc"
appuser.name = "Lucy"

console.log(appuser);


const nest = {
    id : "12anb",
    name : {
        fullname:{
            fname:"Shahul",
            lname:"Ahmed"
        }
    }
}

console.log(nest.name);
console.log(nest.name.fullname);
console.log(nest.name.fullname.fname);


const obj1 ={
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}
// const obj3 = {obj1,obj2}


// const obj3 = Object.assign(obj1,obj2)  // Assigns all other objects into the first object

// console.log(obj1==obj3);



const obj3 = Object.assign({},obj1,obj2)  //Assigns All other Objects into an Empty object

// console.log(obj1==obj3);   // False

console.log(obj3);


//Using Spread Operator


const obj5 = {...obj1,...obj2}

console.log(obj5);                  // Result will be same as obj3


// Keys of the Object


console.log("Keys : ",Object.keys(obj5));
console.log("Values : ",Object.values(obj5));
console.log("Entries : ",Object.entries(obj5));

console.log(obj5.hasOwnProperty("1"));   // True
console.log(obj5.hasOwnProperty("5"));      // False
