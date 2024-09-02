// Immediately Invoked Function Expression(IIFE)


// Named IIFE

(function one(){            // function is wrapped using () for immediate Execution
    console.log("Connected One")
})();                   // Semi-colon is used to end the execution

(function two(){
    console.log("Connected Two");
})();


// UnNamed IIFE

(()=>{
    console.log("Using Arrow Function"); 
})();

((name)=>{
    console.log(`Name is ${name}`); 
})('Lucy')
