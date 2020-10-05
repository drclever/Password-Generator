//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Various Arrays (Numbers, Special Characters, Lower case alphabet, Upper case alphabet)
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var psdLength = "";
var psdSpecialChar;
var psdNumericChar;
var psdUpperCase;
var psdLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
    var psdLength = '';
    
    //Prompt user to input desired character length (Validate that entry is numeric and between 8 to 128 characters).  Cancel will exit prompts.
    while (isNaN(psdLength) || psdLength < 8 || psdLength > 128) {
        psdLength = prompt("What length would you like the password to be? (Between 8 to 128 characters)");

        if (psdLength === null) {
            alert("Cancelling");
            return '';
        }
        else {
            if (isNaN(psdLength) || psdLength < 8 || psdLength > 128) {
                alert("Password length must be between 8-128 characters Try again");
            }
        }
    }

    // Repeat back how many charactes the user will have  
    alert(`Your password will have ${psdLength} characters`);

    // Determine parameters of password 
    var psdSpecialChar = confirm("Click OK to confirm if you want to include special characters");
    var psdNumericChar = confirm("Click OK to confirm if you want to include numeric characters");    
    var psdLowerCase = confirm("Click OK to confirm if you want to include lowercase characters");
    var psdUpperCase = confirm("Click OK to confirm if you want to include uppercase characters");

    // Loop if answer is outside the parameters 
    while(psdUpperCase === false && psdLowerCase === false && psdSpecialChar === false && psdNumericChar === false) {
        alert("You must choose at least one parameter");
        var psdSpecialChar = confirm("Click OK to confirm if you want to include special characters");
        var psdNumericChar = confirm("Click OK to confirm if you want to include numeric characters");    
        var psdLowerCase = confirm("Click OK to confirm if you want to include lowercase characters");
        var psdUpperCase = confirm("Click OK to confirm if you want to include uppercase characters");   
    } 

    // Merge the criteria arrays into one big array.  Could have created the above array at the top.  However, I wanted modularity.
    var psdCharacters = []
      
    if (psdSpecialChar) {
        psdCharacters = psdCharacters.concat(specialChar)
    }

    if (psdNumericChar) {
        psdCharacters = psdCharacters.concat(number)
    }
      
    if (psdLowerCase) {
        psdCharacters = psdCharacters.concat(alphaLower)
    }

    if (psdUpperCase) {
        psdCharacters = psdCharacters.concat(alphaUpper)
    }

    // Create random password from the concatenated array.
    var randomPassword = ""
      
    for (var i = 0; i < psdLength; i++) {
        randomPassword = randomPassword + psdCharacters[Math.floor(Math.random() * psdCharacters.length)];
    }
    return randomPassword;
}

// Write password to the #genpassword (Generated Password) input
function writePassword() {
    var password = generatePassword();
    document.querySelector("#genpassword").value = password;
}