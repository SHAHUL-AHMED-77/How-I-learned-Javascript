let sample = "Hello"

console.log(typeof sample)
        //or//
console.log(typeof(sample))

// Conversion
console.log("Coversions ->")

let num = 34

console.log(typeof num)

let n = String(num)

console.log(n)

console.log(typeof n)


let word = "34"
console.log(typeof word)


let a = Number(word)
console.log(a);
console.log(typeof a)


// Converting string("34bgh") into Number
console.log("String To Number ->")

let exp = "34bgh"

console.log(typeof exp)

exp_num = Number(exp)

console.log(exp_num)  // It return NAN (Not an Number) but Type is Number
console.log(typeof exp_num)



// Converting Boolean to Number and String

console.log("Boolean To Number And String ->")


let bo = true

console.log(typeof bo);

let b = Number(bo)
console.log(b)
console.log(typeof b);                  //True = 1 & False = 0

let c = String(bo)
console.log(c)
console.log(typeof c);


// Boolean Conversions

console.log("Boolean Conversions ->")

let d = NaN   
let e = Boolean(d)
console.log(e);

/*
        if d is Any integer other than 0 or Non Empty String, it returns True
        if d is 0 or d is ""(Empty String) or null or undefine or NaN, it returns False

*/









