

//************************************* Numbers  ******************************\\
const s = 100

console.log(s);

console.log(s.toString().replace("100",200));

console.log(s.toString().split(''));

const s1  = new Number(500)

console.log(s1);

console.log(s1.toFixed(2));

const s2 = 1244.56789

console.log(s2.toPrecision(4));  // 1245

console.log(s2.toPrecision(5));   // 1244.6

const s3 = 10000

console.log(s3.toLocaleString('en-IN'));


// Example number for demonstration
let num = 1234.56789;

// Parsing Methods
console.log(Number.parseInt("123px"));   // 123
console.log(Number.parseFloat("123.45em")); // 123.45

// Formatting Methods
console.log(num.toFixed(2));  // "1234.57" (rounds to 2 decimal places)
console.log(num.toExponential(2));  // "1.23e+3" (exponential notation with 2 decimals)
console.log(num.toPrecision(5));  // "1234.6" (number with specified total precision)
console.log(num.toString()); // "1234.56789" (converts number to string)
console.log(num.toString(16)); // "4d2.91eb851eb851f" (hexadecimal string)



// ************************* Math **************************\\

console.log(Math.abs(-4.5));
console.log(Math.round(5.6));
console.log(Math.ceil(5.2));
console.log(Math.floor(5.9));

console.log(Math.random());

console.log(Math.random()*10);

console.log((Math.random()*10) + 1);

console.log(Math.floor(Math.random()*10) + 1);

const min  = 50

const max  = 100

console.log(Math.floor(Math.random()*(max - min +  1) + min ));
