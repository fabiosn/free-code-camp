function pairElement(str) {
  var nucleobases = str.split('');
  var pairs = [];

  for (var i = 0; i < nucleobases.length; i++) {
    var providedNucleobase = nucleobases[i];

    switch(providedNucleobase) {
      case 'A':
        pairs.push([providedNucleobase, 'T'])
        break;
      case 'C':
        pairs.push([providedNucleobase, 'G'])
        break;
      case 'G':
        pairs.push([providedNucleobase, 'C'])
        break;
      case 'T':
        pairs.push([providedNucleobase, 'A'])
        break;
    }
  }

  return pairs;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
