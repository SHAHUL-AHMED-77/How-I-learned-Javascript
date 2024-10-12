function obj(n){
    return n +10
}
obj.power = 3
console.log(obj(7));
console.log(obj.power);
console.log(obj.prototype);
console.log(typeof(obj));       //Function
console.log(typeof(obj.prototype));     // Object

function cart(name,price){
    this.name = name
    this.price = price
}
cart.prototype.add = function (){
    this.price++;
}
cart.prototype.display =function () {
    console.log(`the price is ${this.price}`);
}

const one = new cart("lucy",1000)
one.add()
one.display()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/