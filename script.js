// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// CAPTURE USER INPUT
//Add password criteria 
var charsLower = "abcdefghijklmnopqrstuvwxyz";
var charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsNum = "0123456789";
var charsSpec = "!#$%&'()*+,-./:;<=>?@[\"]\\^_`{|}~";
// comboPool is all the possible variables
var comboPool = "";
var thePassword = "";

//Generate Password Function
function generatePassword() {

  // PROMPT 1: Password length - at least 8 characters and no more than 128 characters
  var passwordLength = window.prompt("Password Length. Must be at least 8 characters and no more than 128 characters.");
  if (passwordLength < 8 || passwordLength > 128) {
    // Add warning prompt for bad input on LENGTH
    window.alert("Invalid password length. Must be at least 8 characters and no more than 128 characters.")
  }
  else {
    // PROMPT 2: Confirm whether or not to include lowercase
    var passwordLowercase = window.confirm('Include lowercase characters?');
    if (passwordLowercase === true) {
      // If its true, i want to include all lowercase letters
      comboPool = comboPool + charsLower;
    }
    // PROMPT 3: Confirm whether or not to include uppercase
    var passwordUppercase = window.confirm('Include uppercase characters?');
    if (passwordUppercase === true) {
      // If its true, i want to include all upper case
      comboPool = comboPool + charsUpper;
    }
    // PROMPT 4: Confirm whether or not to include numeric
    var passwordNumbers = window.confirm('Include numbers?');
    if (passwordNumbers === true) {
      // If its true, i want to include all numeric
      comboPool = comboPool + charsNum;
    }
    // PROMPT 5: Confirm whether or not to include special characters
    var passwordSpecial = window.confirm('Include special characters?');
    if (passwordSpecial === true) {
      // If its true, i want to include all special characters
      comboPool = comboPool + charsSpec;
    }

    console.log(comboPool);

    // This pulls together the password criteria
    for (var i = 0; i < passwordLength; i++) {

      // each charater has an index from 0 - string end. Use this to pull them
      // Figure out how to randomize the included characters within the given password length
     thePassword += comboPool[Math.floor(Math.random() * comboPool.length)];
    }
    console.log(thePassword);
    return thePassword
  }
}

// This writes out password to the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);
