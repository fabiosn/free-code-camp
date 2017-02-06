function myReplace(str, before, after) {
  return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("His name is Tom", "Tom", "john"));
