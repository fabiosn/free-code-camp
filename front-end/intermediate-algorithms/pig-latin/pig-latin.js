function translatePigLatin(str) {
    var firstVowel = str.match(/[aeiou]/).index;

  if (!firstVowel) {
    str += 'way';
  } else {
    var start = str.substring(0, firstVowel);
    str = str.slice(start.length);

    str = str + start + 'ay';
  }

  return str;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("banana"));
console.log(translatePigLatin("trash"));
