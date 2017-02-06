function translatePigLatin(str) {
  if (str[0].match(/[aeiou]/)) {
    str += 'way';
  } else {
    str = str.slice(1) + str[0] + 'ay';
  }

  return str;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("algorithm"));
