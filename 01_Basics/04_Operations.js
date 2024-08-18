

//-------------------------Operations--------------------------\\

console.log(2+2)   
console.log(2-2)
console.log(2*2)
console.log(2**3);
console.log(2/2)
console.log(2%2)


console.log("2" + 1)
console.log("1" + 2)    // String Concatenation happens with the + operator when one operand is a string.
console.log("2"**3)   
console.log("2"-1)

console.log("-------")

console.log("2" + 1 + 2)
console.log(1 + 2 + "2")
console.log(1 + "2" + 2)

console.log("-------")

console.log("2" - 1 + 2)
console.log(1 + 2 - "2")
console.log(1 - "2" - 2)    // Numeric Conversion happens with -, *, /, and ** operators when operands are strings that can be converted to numbers.



let score = 1000
console.log(score);     /* 
                        The value 1000 is printed before incrementing.
                        Then score is incremented, and the new value 1001 is printed.*/               
score++;     
console.log(score);

let score_1 = 1000
console.log(score_1);       /*
                            score_1 is incremented first to 1001, and then the incremented
                            value is printed immediately */
++score_1;
console.log(score_1);