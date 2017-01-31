function whatIsInAName(collection, source) {
  var arr = [];

  collection.forEach(function(obj) {
    var hasAllProps = true;
    
    for (var key in source) {
      if (obj[key] !== source[key]) hasAllProps = false;
    }

    if (hasAllProps) arr.push(obj);
  });

  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
