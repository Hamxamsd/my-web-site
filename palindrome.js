function checkPalindrome(string) {
  const len = string.length;

  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

var string = document.getElementById("txt").innerText;
// const string = prompt("Enter a string: ");
function checkMe() {
    if(string.length < 10){
        document.write("Your String Length is less than 10 character:  &  ");
    }
  const value = checkPalindrome(string);
  document.write(value);
}