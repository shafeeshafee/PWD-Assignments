// Make a switch statement with this variables and these conditions. 
// Make a variable restaurant Item. as well as a price. 

// Make the conditions, 
// Burger; $10
// Steak ; $25
// Salmon; $20
// Shrimp; $20
// Chicken; $15

// Make a default instructing option not available. 

let grub = "Steak";

switch (grub.toLowerCase()) {
    case "burger":
        console.log(`$10`);
        break;
    case "steak":
        console.log(`$25`);
        break;
    case "salmon":
        console.log(`$20`);
    case "shrimp":
        console.log(`$20`);
        break;
    case "chicken":
        console.log(`$15`);
        break;
    default:
        console.log(`Sorry, we're fresh out!`);
}