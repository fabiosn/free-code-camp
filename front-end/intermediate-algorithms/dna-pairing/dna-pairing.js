function pairElement(str) {
  var nucleoBases = str.split('');

  for (var i = 0; i < nucleoBases.length; i++) {
    switch(nucleoBases[i]) {
      case 'A':
        console.log('T');
        break;
      case 'C':
        console.log('G');
        break;
      case 'G':
        console.log('C');
        break;
      case 'T':
        console.log('A');
        break;
    }
  }

  return nucleoBases;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
