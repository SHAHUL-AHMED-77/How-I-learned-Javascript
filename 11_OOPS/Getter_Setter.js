class One{
    constructor(user,pass){
        this.user = user
        this.pass = pass
    }
    get user(){
        return `${this._user.toLowerCase()}`
    }
    set user(v){
        this._user = v
    }
    get pass(){
        return `${this._pass.toUpperCase()}`
    }
    set pass(v){
        this._pass  = v 
    }
}
const u1 = new One("Lucy","opjsa")
console.log(u1);
console.log(u1.user);
console.log(u1.pass);


// Old Method

function Two(user,pass){
    this._user = user
    this._pass = pass

    Object.defineProperty(this,'user',{
        get:function (){
            return this._user.toLowerCase()
        },
        set : function(v){
            this._user = v
        }
    })
    Object.defineProperty(this,'pass',{
        get:function (){
            return this._pass.toUpperCase()
        },
        set : function(v){
            this._pass = v
        }
    })
}
const u2 = new Two("LUFFY","75anbs64")
console.log(u2);
console.log(u2.user);
console.log(u2.pass);


//Using Object Based Properties

const three = {
    _user : "Shanks",
    _pass : "jdg8287",

    get user(){
        return this._user.toUpperCase()
    },
    set user(v){
        this._user = v
    },
    get pass(){
        return this._pass.toUpperCase()
    },
    set pass(v){
        this._pass = v
    }
}
const h = Object.create(three)

console.log(three);
console.log(h.user);
console.log(h.pass);
