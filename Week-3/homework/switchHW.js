// Make a switch statement with this variables and these conditions. 
// Make a variable restaurant Item. as well as a price. 

// Make the conditions, 
// Burger; $10
// Steak ; $25
// Salmon; $20
// Shrimp; $20
// Chicken; $15

// Make a default instructing option not available. 

let item = "Steak";
let price = 0;

switch (item.toLowerCase()) {
    case "burger":
        price = 10;
        console.log(`$${price}`);
        break;
    case "steak":
        price = 25;
        console.log(`$${price}`);
        break;
    case "salmon":
        price = 20;
        console.log(`$${price}`);
    case "shrimp":
        price = 20;
        console.log(`$${price}`);
        break;
    case "chicken":
        price = 15;
        console.log(`$${price}`);
        break;
    default:
        console.log(`Sorry, we're fresh out!`);
}