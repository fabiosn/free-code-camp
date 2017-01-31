function diffArray(arr1, arr2) {
  var newArr = [];

  //get an array of all elements provided
  newArr = arr1.concat(arr2);

  //check if the element is not present in either of the provided arrays
  newArr = newArr.filter(function(element) {
    return arr1.indexOf(element) < 0 || arr2.indexOf(element) < 0;
  });

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
