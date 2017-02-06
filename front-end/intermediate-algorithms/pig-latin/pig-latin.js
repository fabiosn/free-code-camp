function translatePigLatin(str) {
  if (str[0].match(/[aeiou]/)) {
    str += 'way';
  }

  return str;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("algorithm"));
