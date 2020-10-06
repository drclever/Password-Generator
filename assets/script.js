//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Various Arrays (Numbers, Special Characters, Lower case alphabet, Upper case alphabet)
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
let pswdLength = "";
let pswdSpecialChar;
let pswdNumericChar;
let pswdUpperCase;
let pswdLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
    pswdLength = '';
    
    //Prompt user to input desired character length (Validate that entry is numeric and between 8 to 128 characters).  Cancel will exit prompts.
    while (isNaN(pswdLength) || pswdLength < 8 || pswdLength > 128) {
        pswdLength = prompt("What length would you like the password to be? (Between 8 to 128 characters)");

        if (pswdLength === null) {
            alert("Cancelling");
            return '';
        }
        else {
            if (isNaN(pswdLength) || pswdLength < 8 || pswdLength > 128) {
                alert("Password length must be between 8-128 characters Try again");
            }
        }
    }

    // Repeat back how many charactes the user will have  
    alert(`Your password will have ${pswdLength} characters`);

    // Determine parameters of password 
    pswdSpecialChar = confirm("Click OK to confirm if you want to include special characters");
    pswdNumericChar = confirm("Click OK to confirm if you want to include numeric characters");    
    pswdLowerCase = confirm("Click OK to confirm if you want to include lowercase characters");
    pswdUpperCase = confirm("Click OK to confirm if you want to include uppercase characters");

    // Loop if answer is outside the parameters 
    while(pswdUpperCase === false && pswdLowerCase === false && pswdSpecialChar === false && pswdNumericChar === false) {
        alert("You must choose at least one parameter");
        pswdSpecialChar = confirm("Click OK to confirm if you want to include special characters");
        pswdNumericChar = confirm("Click OK to confirm if you want to include numeric characters");    
        pswdLowerCase = confirm("Click OK to confirm if you want to include lowercase characters");
        pswdUpperCase = confirm("Click OK to confirm if you want to include uppercase characters");   
    } 

    // Merge the criteria arrays into one big array.  Also ensure that the selected criteria shows up at least once.  This is being done at the beginning of the password.
    let pswdCharacters = [];
    let randomPassword = "";
    let criteriaTotal = 0;

    if (pswdUpperCase) {
        pswdCharacters = pswdCharacters.concat(alphaUpper)
        criteriaTotal += 1;
        randomPassword = randomPassword + alphaUpper[Math.floor(Math.random() * alphaUpper.length)];
    }

    if (pswdSpecialChar) {
        pswdCharacters = pswdCharacters.concat(specialChar)
        criteriaTotal += 1;
        randomPassword = randomPassword + specialChar[Math.floor(Math.random() * specialChar.length)];
    }

    if (pswdNumericChar) {
        pswdCharacters = pswdCharacters.concat(number)
        criteriaTotal += 1;
        randomPassword = randomPassword + number[Math.floor(Math.random() * number.length)];
    }
      
    if (pswdLowerCase) {
        pswdCharacters = pswdCharacters.concat(alphaLower)
        criteriaTotal += 1;
        randomPassword = randomPassword + alphaLower[Math.floor(Math.random() * alphaLower.length)];
    }

    // Complete the creation of the random password from the concatenated array to the specified length.  Note that the characters at the beginning have already been determined by the criteria specified.  That is why we are starting with criteriaTotal position.
      
    for (var i = criteriaTotal; i < pswdLength; i++) {
        randomPassword = randomPassword + pswdCharacters[Math.floor(Math.random() * pswdCharacters.length)];
    }
    return randomPassword;
}

// Write password to the #genpassword (Generated Password) input
function writePassword() {
    let password = generatePassword();
    document.querySelector("#genPassword").value = password;
}