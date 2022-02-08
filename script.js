"use strict";

window.addEventListener("DOMContentLoaded", start);

const input = document.querySelector("#input_text");
const operator = document.querySelector("#operator");
const output = document.querySelector("#output_text");
const generateBtn = document.querySelector("#generate");

//Read operator
// let operatorChoose = operator.value;
let result;
let subResult;

function start() {
  input.value = "";
  output.value = "";
}

generateBtn.addEventListener("click", generateOutput);

function generateOutput() {
  let inputText = input.value;
  let operatorChoose = operator.value;

  //create output out of opreator + input
  switch (operatorChoose) {
    case "1":
      // Make the first character in a name uppercase, and the rest lowercase
      result = inputText.substring(0, 1).toUpperCase() + inputText.substring(1).toLowerCase();
      break;

    case "2":
      // Find the first name
      result = inputText.substring(inputText.indexOf(0), inputText.indexOf(" "));
      break;

    case "3":
      // Find the length of the first name
      subResult = inputText.substring(inputText.indexOf(0), inputText.indexOf(" "));
      result = subResult.length;
      break;

    case "4":
      // Find the middle name start and end position, and the middle name itself in a full name string
      result = "Start index: " + (inputText.indexOf(" ") + 1) + ", End index: " + inputText.lastIndexOf(" ") + ", Middle name: " + inputText.substring(inputText.indexOf(" ") + 1, inputText.lastIndexOf(" "));
      break;

    case "5":
      // Check if a filename is .png or .jpg
      result = inputText.endsWith(".png") || inputText.endsWith(".jpg");
      break;

    case "6":
      // Hide a password with the correct number of *s
      result = "*".repeat(inputText.length);
      break;

    case "7":
      // Make the third character uppercase
      result = inputText.substring(0, 2) + inputText.charAt(2).toUpperCase() + inputText.substring(3);
      break;
    // case "8":
    //   // Make a character uppercase, if it follows a space or a hyphen
    //   subResult = inputText.includes("-");
    //   break;
  }
  output.value = result;
}
