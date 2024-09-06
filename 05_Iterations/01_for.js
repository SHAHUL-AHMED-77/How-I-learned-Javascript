// for loop

for (let i = 1; i <=5; i++) {
    const element = i;
    console.log(element);   
}

//for with if-else

for(let i = 1; i <=5; i++){
    const a = i
    if(i==3){
        console.log("3 is Printed"); 
    }
    console.log(a);   
}
console.log("Nested for Loops :");
for (let i = 0; i < 5; i++) {
    console.log(`Outer : ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Inner : ${j}  Inside :${i}`);     
    }
    console.log("");
}

console.log("Tables:");

for (let i = 1; i <= 10; i++) {
    console.log(`Table ${i} :`);
    
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }  
}


// For with arrays
let arr = ["Luffy","Shanks","Sanji","Zoro","Nami","Robin"]
console.log(arr.length);
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);  
}

// Break And Continue
console.log("Break:");

for (let index = 0; index < 5; index++) {
    if(index ==3){
        break      // # Immediately exits the loop
    }
    console.log(index);
}
console.log("Continue:");

for (let index = 0; index < 5; index++) {
    if(index ==3){
        continue      // # ignores the value and continue Execution
    }
    console.log(index);
}