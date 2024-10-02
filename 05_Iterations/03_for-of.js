// HIGH ORDER ARRAY LOOPS

//For of

// for (const element of object) {
    
// }

const a = [1,2,3,4,5,6]
for (const i of a) {
    console.log(`Value is ${i}`);
}

// const greet = "Hello World!"
// for (const i of greet) {
//     console.log(`Char is ${i}`);
// }

//Maps

const map = new Map()
map.set("In","India")
map.set("UK","United Kingdom")
map.set("Fr","France")

// console.log(map);

for (const m of map) {
    // console.log(m);
}
for (const [k,v] of map) {          // Array De-Structuring
    
    console.log(`${k} :- ${v}`);
}