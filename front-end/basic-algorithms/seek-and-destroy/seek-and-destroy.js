function destroyer(arr) {
  // Remove all the values

  //starting with i = 1 ensures the provided array is not considered when looping through the arguments array
  for (i = 1; i < arguments.length; i++) {
    var valueToDestroy = arguments[i];

    arr = arr.filter(function(element) {
      return (element !== valueToDestroy);
    });
  }
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
