class User{
    constructor(name,email,pass){
        this.name = name
        this.email = email
        this.pass = pass
    }
    passencrypt(){
        return `${this.pass}*&^4`
    }
    capitaluser(){
        return `${this.name.toUpperCase()}`
    }
}
const user = new User("lucy","lucy@gmail.com","abvgd")
console.log(user.passencrypt());
console.log(user.capitaluser());


// Behind the Scene
function Users(name,email,pass){
        this.name = name
        this.email = email
        this.pass = pass
}

Users.prototype.epass = function (){
    return `${this.pass}*&^4`
}
Users.prototype.cname = function (){
    return `${this.name.toUpperCase()}`
}
const user2 = new Users("luffy","luffy@123","9695jdh")
console.log(user2.epass());
console.log(user2.cname());
