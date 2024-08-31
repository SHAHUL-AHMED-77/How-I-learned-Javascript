const food = {
    Foodname : "Apple",
    Price:100,
    Quality:"Good"
}

// console.log(food.Price);


const {Price} = food        // Writing this instead of "Fodd.Price" 

console.log(Price);


const {Foodname:name} = food       // Used for shortening the name

// console.log(food.Foodname);   

console.log(name);
