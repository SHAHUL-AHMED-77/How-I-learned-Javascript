const Promiseone = new Promise((resolve,reject)=>{
        //do async task
        // databasecalls ,cryptography , network calls

        setTimeout(()=>{
            console.log("Hello World");
            resolve()
        },2000)
})
Promiseone.then(()=>{
    console.log("Resolved");
    
})

// Above Promise can be also written as :


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Hello Lucy");
        resolve()
    },1000)
}).then(()=>{
    console.log("Resolved Two");
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const obj = {username:"Lucy",Id:234}
        resolve(obj)
    },2000)
}).then((a)=>{
    console.log(a);
    
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let task = true
        if(!task){
            const name = {fname:"Shahul",lname:"Ahmed"}
            resolve(name)
        }else{
            reject("Error Ocurred") 
        }
    },3000)
}).then((user)=>{
    return user.fname
}).then((username)=>{
    console.log(username);
}).catch((error)=>{                         // Executes when Error occurs
    console.log(error); 
}).finally(()=>{
    console.log("Either Resolved or Rejected");   // It will Executed Irespective of resolve or reject
    
})

// Using Async

const Promisefive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let task = true
        if(!task){
            const name = {fname:"Shahul",lname:"Ahmed"}
            resolve(name.fname)
        }else{
            reject("Error Ocurred") 
        }
    },3000)
})

async function five() {
    try {
        const response = await Promisefive
        console.log(response);
    } catch (e) {
        console.log(e); 
    }
}   

five()


// fetching data using async

// async function sample() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data =  await response.json()
//         console.log(data);
        
//     } catch (e) {
//         console.log("error");
//     }
// }

// sample()

// Writing Above using Promises

fetch('https://api.github.com/users/SHAHUL-AHMED-77')
.then((response)=>{
     return response.json()
})
.then((data)=>{
        console.log(data.name);
})
.catch((error)=>console.log(`Error :-${error}`))
