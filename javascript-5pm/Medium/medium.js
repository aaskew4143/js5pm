
let number = prompt("Enter a number between 1 and 12:");
let months = ["January", 
"February", "March", 
"April", "May", "June",
 "July", "August",
  "September", "October", 
  "November", "December"];

if (number < 1 || number > 12) {
    alert("Invalid input. Please enter a number between 1 and 12.");
} else {
    console.log(`The month corresponding to the number ${number} is ${months[number-1]}.`);
}
