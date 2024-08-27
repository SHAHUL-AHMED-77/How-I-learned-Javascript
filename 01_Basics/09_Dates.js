
const d = new Date()

console.log(typeof d);

console.log(d.toLocaleString());

console.log(d.toString());

console.log(d.toDateString());

console.log(d.toISOString());

console.log(d.toJSON());

console.log(d.toLocaleDateString());

console.log(d.toLocaleTimeString());


console.log(d.getFullYear());

// const d1 = new Date(2024,0,9)
// const d1 = new Date(2024,12,9)
// const d1 = new Date(2024,12,9,6,30)
// const d1 = new Date("2023-04-7")
const d1 = new Date("01-03-2024")

console.log(d1);

console.log(d1.toDateString());

console.log(d1.toLocaleString());

console.log(`The date is ${d1.toDateString()}`);

console.log(d1.getDate());

console.log(d1.getMonth() + 1);


const today = new Date()

console.log(`Todays Date is ${today.toLocaleDateString()} and Current Time is ${today.toLocaleTimeString()}`);
