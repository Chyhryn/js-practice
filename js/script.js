// 1 Task ------------------------------
// You need to calculate amount of tip to give in a restaurant/cafe.
// 	Workflow:
// 1.	User inputs check sum. (Use “prompt” function).
// 2.	User inputs tip percentage. (Use “prompt” function)
// 3. For an empty string or cancelled input, show “Canceled.”
// 4.	You need to validate the input data: both values should be numbers, check sum can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// 5.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// 6.	You need to calculate tip amount and total sum to pay.
// 7.	Show message: (example). Use ”alert” function
// Check sum: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230

// const checkSum = prompt("Please enter check sum!");
// const tipPercentage = prompt("Please enter tip percent");

// if (
//   checkSum === "" ||
//   checkSum === null ||
//   tipPercentage === "" ||
//   tipPercentage === null
// ) {
//   alert("Canceled");
// } else {
//   const parseCheckSum = Number.parseFloat(checkSum);
//   const parseTipPercentage = Number.parseFloat(tipPercentage);
//   if (
//     parseCheckSum <= 0 ||
//     parseTipPercentage < 0 ||
//     parseTipPercentage > 100 ||
//     Number.isNaN(parseCheckSum) ||
//     Number.isNaN(parseTipPercentage)
//   ) {
//     alert("Invalid input data");
//   } else {
//     const tipSum = (parseTipPercentage / 100) * parseCheckSum;
//     const totalSum = parseCheckSum + tipSum;
//     const message = `Check sum: ${parseCheckSum} Tip: ${parseTipPercentage}% Tip amount: ${tipSum.toFixed(
//       2
//     )} Total sum to pay:  ${totalSum.toFixed(2)}`;
//     alert(message);
//   }
// }

// 2 Task ------------------------------
// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
// 	For user input “test” should return “es”
// 	For user input “character” should return “a”
// 	For user input “B” should return “B”
// 	For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”

// const word = prompt("Input a word please!");

// if (word.trim() === "" || word === null) {
//   alert("Invalid value");
// } else {
//   const halfWord = word.length / 2;
//   if (word.length % 2 === 0) {
//     console.log(word.slice(halfWord - 1, halfWord + 1));
//   } else {
//     console.log(word.slice(halfWord, halfWord + 1));
//   }
// }

// 3 Task ------------------------------
// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;

// const d = [b[0]].concat(b[1]);

// console.log(d);

// console.log(a.concat(c).concat(d));

// Result: ["a", "b", "c", 0, 1, 2, 3];

// 4 Task ------------------------------

// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
// const d = a.copyWithin(3, 0, 3);
// console.log(d);

// Result: ["a", "b", "c", "a", "b", "c", "g", "h"];

// 5 Task ------------------------------

// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// 	If it’s another string – then show “I don’t know you”.
// 	If the visitor enters "User" or "Admin", then prompt for a password.
// Step 2. Check password:
// 	For an empty string or cancelled input, show “Canceled.”
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.
// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20: // current hours – new Date().getHours()
// 	For “User” show “Good day, dear User!”
// 	For “Admin” show “Good day, dear Admin!”
// 	In other way:
// 	For “User” show “Good evening, dear User!”
// 	For “Admin” show “Good evening, dear Admin!

// const login = prompt("Enter your login!");
// if (login === "" || login === null) {
//   alert("Canceled.");
// } else {
//   if (login.length < 4) {
//     alert("I don't know any users having name length less than 4 symbols");
//   } else {
//     if (login !== "User" && login !== "Admin") {
//       alert("I don’t know you");
//     } else {
//       const password = prompt("Enter your password!");
//       if (password === "" || password === null) {
//         alert("Canceled.");
//       } else if (
//         (login === "User" && password !== "UserPass") ||
//         (login === "Admin" && password !== "RootPass")
//       ) {
//         alert("Wrong password");
//       } else {
//         const hours = new Date().getHours();
//         if (hours > 5 && hours < 20) {
//           alert(`Good day, dear ${login}!`);
//         } else {
//           alert(`Good evening, dear ${login}!`);
//         }
//       }
//     }
//   }
// }

/* Видкладений виклик: реєстрація події 
*
*

const buttonRef = document.querySelector(".js-button");

const hendleBtnClick = function () {
  console.log('Клік по кнопці');
};

buttonRef.addEventListener('click', hendleBtnClick);
*/

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       number += value;
//     }
//     newArray.push(number);
//   });
//   console.log(newArray);
//   return newArray;
//   // Change code above this line
// }

// changeEven([1, 2, 3, 4, 5], 10);
