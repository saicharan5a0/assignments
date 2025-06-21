/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  var str = str.toLowerCase();
  var i =0;
  var j =str.length-1;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  while(i<j){
    if(!alphabet.includes(""+str.charAt(i))){
      i++;
      continue;
    }
    if(!alphabet.includes(""+str.charAt(j))){
      j--;
      continue;
    }
    if(str.charAt(i) == str.charAt(j)){
      i++;
      j--;
    }
    else{
      return false;
    }
    
  }
  return true;
}

module.exports = isPalindrome;
