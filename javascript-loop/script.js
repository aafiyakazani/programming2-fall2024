 let fastfood = ["hamburger", "fries", "mac&cheese","milkshake"];

for (let i=0; i< fastfood.length; i++){
    console.log(fastfood[i]);
}

let numbers=[45,36,78];
let doubled=[];
for (let i=0; i<numbers.length;i++){
    doubled.push(numbers[i]*2);
}
 console.log(doubled);

//for (let i=0; i<=100){
//    console.log("aafiya");
//}
//activity 1 
let animals = ['Lion', 'Elephant', 'Giraffe', 'Tiger', 'Zebra'];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

let uppercaseAnimals = [];
for (let i = 0; i < animals.length; i++) {
  uppercaseAnimals.push(animals[i].toUpperCase());
}

console.log(uppercaseAnimals);


animals.pop(); 
animals.pop(); 

console.log(animals);

//activity 2 
let scores = [45, 78, 92, 56, 30, 88, 64, 53, 99, 71];

let bonusScores = [];
for (let i = 0; i < scores.length; i++) {
  bonusScores.push(scores[i] + 5);
}

console.log(bonusScores);


for (let i = 0; i < scores.length; i++) {
  if (scores[i] < 50) {
    scores.splice(i, 1, "Retake"); 
  }
}

console.log(scores);