
const lang = ["js","cpp","python","java","swift"]

const print = lang.forEach((i)=>{
    return i
})

console.log(print);     // Value Cannot be returned in ForEach

//Filter

const num = [1,2,3,4,5,6,7,8,9]

const p1 = num.filter( (i)=> i>5 )
console.log(p1);

const p2 = num.filter( (i)=>{
   return i>5
} )                     // Return should be written when condition is written inside the scope
console.log(p2);


const users = [
    { name: "Alice", age: 25, city: "New York", role: "admin" },
    { name: "Bob", age: 30, city: "San Francisco", role: "user" },
    { name: "Charlie", age: 22, city: "Los Angeles", role: "admin" },
    { name: "Dave", age: 35, city: "New York", role: "user" },
    { name: "Eve", age: 28, city: "Chicago", role: "user" },
    { name: "Frank", age: 40, city: "Boston", role: "admin" },
    { name: "Grace", age: 27, city: "Seattle", role: "user" },
    { name: "Hannah", age: 32, city: "San Diego", role: "admin" },
    { name: "Isaac", age: 29, city: "New York", role: "user" },
    { name: "Jake", age: 24, city: "San Francisco", role: "user" },
    { name: "Kelly", age: 33, city: "Miami", role: "admin" },
    { name: "Liam", age: 26, city: "New York", role: "user" },
    { name: "Mia", age: 31, city: "Los Angeles", role: "admin" },
    { name: "Noah", age: 36, city: "Chicago", role: "user" },
    { name: "Olivia", age: 23, city: "San Diego", role: "user" },
    { name: "Peter", age: 38, city: "Seattle", role: "admin" }
  ];

const age = users.filter((val)=>{
    return val.age > 26 && val.city == "New York"
})
console.log(age);
