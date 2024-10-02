//For in

// for (const key in object) {
// 
// }
const obj={
    a:"one",
    b:"Two"
}
// console.log(obj);

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);  
}

const arr = ["GOW","GOT","GTA"]

for (const i in arr) {
    // console.log(i);         //Index will return Instead of the values
    console.log(arr[i]);        // Values will be Return
}

const map = new Map()
map.set('1',"JS")
map.set('2',"Python")

// console.log(map);

for (const i of map) {
    // console.log(i);  
}

for (const key in map) {
    console.log(key);
}

//For Each

const lang = ["js","cpp","python","java","swift"]

lang.forEach( function (val){
    // console.log(val); 
})

lang.forEach( (val) => {
    // console.log(val);   //Arrow Function
})

function print1 (val){
    // console.log(val);
}
lang.forEach(print1)

lang.forEach((i,index,arr)=>{
    console.log(`Index of ${i} is ${index} And Array list is ${arr}`);  
})

const arrobj = [
    {
        langname:"Javascript",
        langfile:"Js"
    },
    {
        langname:"Java",
        langfile:"java"
    },
    {
        langname:"Python",
        langfile:"py"
    },
]
// console.log(arrobj);

arrobj.forEach( (item)=>{
    console.log(`language Name is ${item.langname} and File name is ${item.langfile}`); 
})