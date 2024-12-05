function generate() {
    let a1input = document.getElementById("a1input").value.toLowerCase();  
    let month = document.getElementById("month").value;  
    let age = parseInt(document.getElementById("age").value);  

    let firstName = "";
    if (a1input === "a") {
        firstName = "Opal";
    } else if (a1input === "b") {
        firstName = "Petal";
    } else if (a1input === "c") {
        firstName = "Cloud";
    } else if (a1input === "d") {
        firstName = "Daisy";
    } else if (a1input === "e") {
        firstName = "Eclipse";
    } else if (a1input === "f") {
        firstName = "Fern";
    } else if (a1input === "g") {
        firstName = "Ginger";
    } else if (a1input === "h") {
        firstName = "Holly";
    } else if (a1input === "i") {
        firstName = "Ivory";
    } else if (a1input === "j") {
        firstName = "Jade";
    } else if (a1input === "k") {
        firstName = "Kale";
    } else if (a1input === "l") {
        firstName = "Lily";
    } else if (a1input === "m") {
        firstName = "Magnolia";
    } else if (a1input === "n") {
        firstName = "Nash";
    } else if (a1input === "o") {
        firstName = "Olive";
    } else if (a1input === "p") {
        firstName = "Poppy";
    } else if (a1input === "q") {
        firstName = "Quartz";
    } else if (a1input === "r") {
        firstName = "Rose";
    } else if (a1input === "s") {
        firstName = "Sunflower";
    } else if (a1input === "t") {
        firstName = "Tulip";
    } else if (a1input === "u") {
        firstName = "Ursula";
    } else if (a1input === "v") {
        firstName = "Violet";
    } else if (a1input === "w") {
        firstName = "Wisteria";
    } else if (a1input === "x") {
        firstName = "Xander";
    } else if (a1input === "y") {
        firstName = "Yasmine";
    } else if (a1input === "z") {
        firstName = "Zinnia";
    } else {
        alert("Please enter a valid input for the first name.");
        return;
    }

    let nickname = "";
    if (age > 0 && age < 10) {
        nickname = "Buck";
    } else if (age >= 10 && age <= 20) {
        nickname = "Tater";
    } else if (age >= 30 && age <= 40) {
        nickname = "Rusty";
    } else if (age >= 40 && age <= 50) {
        nickname = "Chip";
    } else if (age > 50) {
        nickname = "Bubbles";
    } else {
        nickname = "Penny";
    }

    
    let lastName = "";
    if (month === "January") {
        lastName = "Nasty";
    } else if (month === "February") {
        lastName = "Tot";
    } else if (month === "March") {
        lastName = "Shackleford";
    } else if (month === "April") {
        lastName = "Munk";
    } else if (month === "May") {
        lastName = "McGraw";
    } else if (month === "June") {
        lastName = "Loafer";
    } else if (month === "July") {
        lastName = "Bacon";
    } else if (month === "August") {
        lastName = "O'Problem";
    } else if (month === "September") {
        lastName = "Natic";
    } else if (month === "October") {
        lastName = "Matic";
    } else if (month === "November") {
        lastName = "O'Furniture";
    } else if (month === "December") {
        lastName = "Pigg";
    } else {
        alert("Please enter a valid month.");
        return;
    }

    let fullName = firstName + " " + nickname + " " + lastName;
    
    alert("Your funny name is: " + fullName);
}



