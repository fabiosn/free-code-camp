function fearNotLetter(str) {
  var charCodeDiff = str.charCodeAt(str.length - 1) - str.charCodeAt(0) + 1;

  if (charCodeDiff - str.length == 0) {
    return undefined;
  } else {
    for (var i = 0; i < str.length - 1; i++) {
      var currentLetter = str.charCodeAt(i);
      var nextLetter = str.charCodeAt(i + 1);

      if ((nextLetter - currentLetter) > 1) {
        return String.fromCharCode(currentLetter + 1);
      }
    }
  }
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("bcd"));
