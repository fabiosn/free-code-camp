function fearNotLetter(str) {
  var charCodeDiff = str.charCodeAt(str.length - 1) - str.charCodeAt(0) + 1;

  if (charCodeDiff - str.length == 0) {
    return undefined;
  }

  return 'missing a letter';
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("bcd"));
