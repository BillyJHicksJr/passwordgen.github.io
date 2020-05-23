// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(length, charset) {
  var password = generatePassword(length, charset);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", event => {
  var abc = 'abcdefghijklmnopqrstuvwxyz'
  var num = '1234567890'
  var spec = '!@#$%^&*()'
  var charset = '';
  var length = 0;
  alert("Please pick your Password criteria")
  length = Number(prompt('How long would you like your password?', 'Choose between 8-128 Characters'));
  
  if(prompt('Would you like to use Special Characters?\nType yes or no').toLowerCase() === 'yes'){
    charset += spec
  }

  if(prompt('Would you like to use Numbers?\nType yes or no').toLowerCase() === 'yes'){
    charset += num
  }

  if(prompt('Would you like to use Uppercase?\nType yes or no').toLowerCase() === 'yes'){
    charset += abc.toUpperCase()
  }

  if(prompt('Would you like to use Lowercase?\nType yes or no').toLowerCase() === 'yes'){
    charset += abc
  }
  if(charset === ''){
    alert('Cant make a password out of nothing.... duh')
  } else if(length < 8 || length > 128) {
    alert('I TOLD YOU BETWEEN 8 AND 128 CHARACTERS, DO IT AGAIN.')
  } else {
    writePassword(length, charset);
  }
});

function generatePassword(length, charset){
  var result = '';
  for(let i = 0; i < length; i++){
    result += charset[Math.floor(Math.random() * charset.length)]
  }
  return result;
}
