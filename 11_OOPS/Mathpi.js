const a = Math.PI
const b = Math.ceil(Math.PI)
const c = Math.floor(Math.PI)
const d = Math.round(Math.PI)
console.log(a);
console.log(b);
console.log(c);
console.log(d);

const p = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(p);


const one = {
    name : "Zoro",
    age:34,
    Weapon:"Sword"
}
// Object.freeze(one)
console.log(Object.getOwnPropertyDescriptor(one,"age"));

Object.defineProperty(one,"age",{
    writable: false,
    enumerable: true,
})
console.log(Object.getOwnPropertyDescriptor(one,"age"));

// console.log(Object.keys(one));
// console.log(Object.values(one));
// console.log(Object.entries(one));

// for (let key in one) {
//     if (one.hasOwnProperty(key)) { 
//         console.log(`${key} - ${one[key]}`);
//     }
// }
for (let [k,v] of Object.entries(one)) {
    console.log(`${k} :- ${v}`);
}