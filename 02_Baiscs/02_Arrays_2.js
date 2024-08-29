const heroes = ["Ironman","Thor","Hulk","Batman","Superman"]

const Villans = ["Joker","Thanos","Loki","Doom"]

// heroes.push(Villans)      // Directly pushes the array instead of Elements

// console.log(heroes);


const comic = heroes.concat(Villans)
console.log(comic);                    // Returns an New array with Concated Elements

// Spread Operator

const sp = [...heroes,...Villans]       // Same  as Concat
console.log(sp);


const array1 = [1,2,3,4,5,[6,7,8,9,[10,11,12]]]

console.log(array1)

console.log(array1.flat(1));
 
console.log(array1.flat(2));

const fa = array1.flat(Infinity)        // used for removing the nested arrays into single array

console.log(fa)


console.log("------------------------------------------");

console.log(Array.isArray("Lucifer"))    // Checks Array or not

console.log(Array.from("Lucifer"))      // Converts into an Array

console.log(Array.from({name:"Lucy"}))  //Array.from() doesn't work as expected with a plain object like {name: "Lucy"} because it's not an iterable or array-like object, leading to an empty array as the result

let s1 = 10
let s2 = 20
let s3 = 30
let s4 = 40
let s5 = null

console.log(Array.of(s1,s2,s3,s4,s5));    // used for creating Arrays from Different values
