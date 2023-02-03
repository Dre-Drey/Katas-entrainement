function isItaPalindrome(string) {
  let stringReversed = string.split("").reverse().join("");
  if (stringReversed == string) {
    return "It's a Palindrom";
  } else {
    return "It's not a palindrome";
  }
}

console.log(isItaPalindrome("kanak"));
