//****************** Stack Memory ******************\\


// Primitives Datatypes are Used


let name1 = "lucy"          // original Value will not be changed

let name2 = name1           // Copy of original value will be given
                             
name2 = "Lucifer"
console.log(name1)
console.log(name2)



//****************** Heap Memory ******************\\



// Non Primitives Datatypes are Used 


let user1 = {
    Id : 123,
    Field : "Software"
}

let user2 = user1

user2.Id = 456          // Updating or Chnaging Will be chnage the original value

console.log(user1)       // Original Value Is Changed
console.log(user2)
