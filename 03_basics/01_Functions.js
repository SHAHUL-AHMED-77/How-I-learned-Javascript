
function one(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

one   // Function Reference            
one()  // Function Execution    

// function add(a,b){
//     console.log(a+b);
// }
// add(5,7)

// Above can be written as:

function add(a,b){
    return a+b   
    // console.log("Do not get Executed");    // Does not get Excecuted
           
}
const ans = add(4,5)
console.log("Result :",ans)


function login(user){
    if(!user){
        return "Invalid Username"
    }
    return `Hello, ${user}`
}
console.log(login("Lucy")); 
console.log(login());   //if Executes



function sample(pass,cpass){
    if(pass!=cpass){
        return "Password Not Matched"
    }
    return "Password Matched"
}

t = sample(123456,123456)
f = sample(123456,12345)
console.log(t);
console.log(f);


// Functions With Arrays and Objects  :


function cart(v1,v2,...vn){   //Rest Operator
        return vn
}

ct = cart(1,2,3,4,5,6,7,8,9,10)    //v1 = 1 And v2 = 2

console.log(ct);


const user = {
    name:"Lucy",
    id:1234,
    country:"US"
}

function funobj(anyobject){
        return `Name is ${anyobject.name} and Country is ${anyobject.country}`
}

console.log(funobj(user));

// console.log(funobj({
//     name:"Shahul",           // Can give values by creating objects in function Execution
//     id:12345678,
//     country:"India"
// }));

const myarray = [100,2,3,567,8975,332]

function secondvalue(get){
    return get[1]
}
console.log(secondvalue(myarray));

// console.log(secondvalue([1,2,3,4,5,6,7,8]));  //Can give values by creating Arrays in function Execution

