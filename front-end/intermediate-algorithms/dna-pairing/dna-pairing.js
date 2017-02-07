function pairElement(str) {
  var nucleobases = str.split('');

  for (var i = 0; i < nucleobases.length; i++) {
    switch(nucleobases[i]) {
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

  return nucleobases;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
