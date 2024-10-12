function setuser(name){
    this.name = name
}
function createuser(name,email){
    // setuser(name)
    setuser.call(this,name)  // Call stores the reference of the context and passes it to it
    this.email = email
}
const  a = new createuser("Lucy","Lucy@gmail.com")
console.log(a);
