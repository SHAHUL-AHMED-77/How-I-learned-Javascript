const myarr = [1,2,3,4,5,6,7]           // Array Declaration

console.log(myarr);


const myarr2 = new Array(11,22,33,44,55)        // Another Method to declare an Array

console.log(myarr2[0]);                          // Array Indexing


const anime = ["One-piece","Naruto","Aot","Demon-Slayer"]

console.log(anime);

console.log("-----------------------------------------------------");


// Arrays Methods


const one =[0,1,2,3,4,5]

console.log(one);

one.push(6)   // Adds an Element

console.log(one);

one.pop()    // Removes an Element

console.log(one);

one.unshift(9)   // Adds an Element at the start

console.log(one);

one.shift()    // Removes the elemnet from the start

console.log(one);

console.log(one.includes(1));   // Checks for the Element , Returns True or False

console.log(one.indexOf(1));    // Return the Index of the Element

console.log(one.indexOf(9));    // Return -1 if Element is not present
 

console.log("-----------------------------------------");


// Slice And Splice


const two = [1,2,3,4,5,6,7,8]

console.log(two);

// Slice

const s1 = two.slice(0,3)  //Returns the Sliced Elements and Do not change the original string
console.log("A :",two);
console.log(s1);


// Splice

const s2 = two.splice(2,5)  //Returns the No of Elements to be removed/deleted and Changes the original String
console.log("B :",two);
console.log(s2);


const s3 = two.splice(0,2,100)  // Removes the Elements and Inserts 100 In place of them
console.log("C :",two);
console.log(s3);


console.log("-------------------------------------------------");


