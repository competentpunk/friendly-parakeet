// Assignment code here

// CAPTURE USER INPUT


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Add password criteria //BREAK INTO SEPERATE POOLS
var charsLower = "abcdefghijklmnopqrstuvwxyz";
var charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsNum = "0123456789";
var charsSpec = "!#$%&'()*+,-./:;<=>?@[\"]\\^_`{|}~";
var comboPool = ""

//Generate Password Function
function generatePassword() {

  // CHANGE PROMPTS TO CONFIRM and ADD VALIDATORS

  // PROMPT 1: Password length - at least 8 characters and no more than 128 characters
  var passwordLength = window.prompt('Password Length');
  if (passwordLength < 8 || passwordLength > 128) {
    // Add warning prompt for bad input on LENGTH
    window.alert('Invalid length')
  }
  else {
    // PROMPT 2: Confirm whether or not to include lowercase
    var passwordLowercase = window.confirm('Password Lowercase');
    if (passwordLowercase === true) {
      // If its true, i want to include all lowercase letters
      comboPool = comboPool + charsLower;
    }
    // PROMPT 3: Confirm whether or not to include uppercase
    var passwordUppercase = window.confirm('Password Uppercase');
    if (passwordUppercase === true) {
      // If its true, i want to include all upper case
      comboPool = comboPool + charsUpper;
    }
    // PROMPT 4: Confirm whether or not to include numeric
    var passwordNumbers = window.confirm('Password Numbers');
    if (passwordNumbers === true) {
      // If its true, i want to include all numeric
      comboPool = comboPool + charsNum;
    }
    // PROMPT 5: Confirm whether or not to include special characters
    var passwordSpecial = window.confirm('Password Special Characters');
    if (passwordSpecial === true) {
      // If its true, i want to include all special characters
      comboPool = comboPool + charsSpec;
    }

    for (var i = 0; i < passwordLength; i++) {
      // Difficult part of making it random
      // comboPool is all the possible variables
      // Need to create a new variable that is just the password characters
    }
  }
}

// Figure out how to randomize the included characters within the given password length


// Write password to the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// alert()
// alert(password)

// Special Characters list:
// "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
