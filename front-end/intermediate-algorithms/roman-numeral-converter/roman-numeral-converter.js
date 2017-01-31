function convertToRoman(num) {
  var romanNumber = '';

  //handle numbers greater than or equal to 1000
  if (num >= 1000) {
    romanNumber += ('M').repeat(Math.floor(num / 1000));
    num = num % 1000;
  }

  //handle numbers in the 900-999 range
  if (num >= 900) {
    romanNumber += 'CM';
  }

  //handle numbers in the 600-899 range
  if (num >= 600 && num < 900) {
    romanNumber += 'D' + ('C').repeat(Math.floor((num - 500) / 100));
  }

  //handle numbers in the 500-599 range
  if (num >= 500 && num < 600) {
    romanNumber += 'D';
  }

  //handle numbers in the 400-499 range
  if (num >= 400 && num < 500) {
    romanNumber += 'CD';
  }

  //handle numbers in the 100-399 range
  if (num >= 100 && num < 400) {
    romanNumber += ('C').repeat(Math.floor(num / 100));
  }

  num = num % 100;

  //handle numbers in the 90-99 range
  if (num >= 90 && num < 100) {
    romanNumber += 'XC';
  }

  //handle numbers in the 50-89 range
  if (num >= 50 && num < 89) {
    romanNumber += 'L' + ('X').repeat(Math.floor((num - 50) / 10));
  }

  //handle numbers in the 40-49 range
  if (num >= 40 && num < 50) {
    romanNumber += 'XL';
  }

  //handle numbers in the 10-39 range
  if (num >= 10 && num < 40) {
    romanNumber += ('X').repeat(Math.floor(num / 10));
  }

  num = num % 10;

  //handle 9
  if (num == 9) {
    romanNumber += 'IX';
  }

  //handle number in the 5-8 range
  if (num >= 5 && num < 9) {
    romanNumber += 'V' + ('I').repeat(num - 5);
  }

  //handle 4
  if (num == 4) {
    romanNumber += 'IV';
  }

  //handle 1-3
  if (num < 4) {
    romanNumber += ('I').repeat(num);
  }

  return romanNumber;
}

//testing values
var testArr = [1, 3, 4, 5, 7, 9, 10, 14, 49, 50];

testArr.forEach(function(element) {
  console.log(element + ': ' + convertToRoman(element));
});
