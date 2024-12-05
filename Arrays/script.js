//activity 1
let items = ["make up", "shoes", "toothbrush"];
console.log("Initial array:", items);

items.push("laptop", "water bottle");
console.log("After push:", items);


items.pop();
console.log("After pop:", items);


items.splice(1, 0, "phone charger");
console.log( items);


items.splice(2, 1);
console.log( items);

//activity2

let numbers = [5, 10, 15];
console.log("Initial array:", numbers);


numbers.splice(0, 0, 1); 
console.log("After adding a number at the start:", numbers);


numbers.splice(1, 1, 20);
console.log("After replacing the second number:", numbers);