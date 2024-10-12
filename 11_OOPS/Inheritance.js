class One{
    constructor(name){
        this.name = name
    }
    fun1(){
        console.log(`Name is ${this.name}`);
    }
}

class Two extends One{
    constructor(name,age){
        super(name)
        this.age = age
    }
    fun2(){
        console.log(`Name is ${this.name} and Age is ${this.age}`);
    }
}
const n = new Two("lucy",24)
const m = new One("luffy")
n.fun2()
// m.fun2()
console.log(n instanceof One);
console.log(m instanceof One);
console.log(n instanceof Two);
console.log(m instanceof Two);
