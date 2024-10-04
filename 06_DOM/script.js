const p = document.querySelector('.parent')
console.log(p);
console.log(p.children);  //Childrens of the Parent Node
console.log(p.children[3].innerText);  // Accessing the Children of Parent Class

for (let i= 0; i < p.children.length; i++) {
    console.log(p.children[i].innerHTML);
}

p.children[1].style.color = "Red"

console.log(p.firstElementChild); // Access First Element
console.log(p.lastElementChild);  // Access Last Element


const d = document.querySelector('.day')
console.log(d);
console.log(d.parentElement);
console.log(d.nextSibling);
console.log(d.nextElementSibling);


console.log("Nodes :",p.childNodes);
