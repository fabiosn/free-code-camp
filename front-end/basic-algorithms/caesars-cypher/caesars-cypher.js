function rot13(str) {
  //treat the string as an array of characters, and change it using the .map method
  //attention: str will be turned into an array
  str = Array.prototype.map.call(str, function(encodedCharacter, index) {
    //get the current character's Unicode code point
    var encodedCharCode = str.charCodeAt(index);

    //check if its an uppercase alphabetic character
    //(between 65 and 90 on the ASCII table)
    if (encodedCharCode >= 65 && encodedCharCode <= 90) {
      //check if the character is on the first half of the alphabet
      if (encodedCharCode < 78) { //if so, add 13
        return String.fromCharCode(encodedCharCode + 13);
      } else { //if not, subtract 13
        return String.fromCharCode(encodedCharCode - 13);
      }
    } else {
      //do nothing with non-alphabetic characters
      return String.fromCharCode(encodedCharCode);
    }
  });

  //turn str into a string again
  str = str.join('');

  console.log(str);

  return str;
}

rot13("SERR PBQR PNZC");
