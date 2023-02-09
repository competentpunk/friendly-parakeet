// At least 8 characters and no more than 128 characters
// I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// The password is either displayed in an alert or written to the page



// Assignment code here

var generatePassword 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var chars = "0123456789abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// alert()
// alert(password)

// Special Characters list:
// "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
