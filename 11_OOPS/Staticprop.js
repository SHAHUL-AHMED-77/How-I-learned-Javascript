class One{
    constructor(name){
        this.name = name
    }
    static fun1(){
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

const n1 = new Two("Lucy",20)
const n2 = new One("luffy")
// n1.fun1()
// n2.fun1()
One.fun1()    // Static can be only accessed by the class(One,Two) itself not the Instance(n1,n2)