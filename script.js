// Assignment code here
// var password=document.getElementById("password");
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()";
var passwordLength = 0;
var password = "";
var includeLowercase = false;
var includeUppercase = false;
var includeNumeric = false;
var includeSpecialChars = false;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getPasswordCriteria();
  var generatedPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = generatedPassword;
}

// Promptuser for password criteria
function getPasswordCriteria() {
  // prompt for password length
  while (true) {
    var lengthInput = prompt(
      "Enter the length of the password (between 8 and 128 characters):"
    );
    passwordLength = parseInt(lengthInput);
    if (passwordLength >= 8 && passwordLength <= 128) {
      break;
    } else {
      alert(
        "Invalid password length. Please enter a number between 8 and 128."
      );
    }
  }
}

// Prompt for character types
includeLowercase = confirm("Include lowercase characters?");
includeUppercase = confirm("Include uppercase charcters?");
includeNumeric = confirm("Include numeric characters");
includeSpecialChars = confirm("Include special characters?");

// Validate at least one character type is selected
if (
  !(
    includeLowercase ||
    includeUppercase ||
    includeNumeric ||
    includeSpecialChars
  )
);
{
  alert("You must select at least one character type. Please try again.");
  getPasswordCriteria();
}

// Generates random password
function generatePassword() {
  var availableChars = "";
  var password = "";

  if (includeLowercase) {
    availableChars += lowercaseChars;
  }

  if (includeUppercase) {
    availableChars += uppercaseChars;
  }

  if (includeNumeric) {
    availableChars += numericChars;
  }

  if (includeSpecialChars) {
    availableChars += specialChars;
  }

  for (var i = 0; i <= passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars.charAt(randomIndex);
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
