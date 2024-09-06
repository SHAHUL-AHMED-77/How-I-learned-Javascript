// If

if(2!=="2"){
    console.log("Hello");
}

// If-Else
const a = 100

if(a>10){
    console.log("Greater");
}else{
    console.log("Lesser");
}

const b = 100

if(b==1000){
    const power = "Fly"     // power can be accesed only in if scope
    console.log(`User can ${power}`);
}else{
    console.log(`User do not have power `); 
}

const balance = 1000

// if(balance > 500) console.log("Verified");  // Do not Write Like This

// Nested If-Else

const bal = 1000

if(bal < 750){
    console.log("Balance is less than 750");
}
else if(bal < 500){
    console.log("Balance is less than 500");
}
else if(bal < 250){
    console.log("Balance is less than 250");
}
else{
    console.log("Your balance is greater than 1000");
}

if(2<3 && 2<4){         //both must be true
    console.log("And Operator");
}

if(2<3 || 2>4){         //one must be true
    console.log("Or Operator");
}