function firstToLast(str, c) {
  //coding here..
  let arrayOfIndex = [];
  for (let i = 0; i < str.length; i++) {
    console.log(str.search(c));
    if (str.search(c) == str[i]) {
      arrayOfIndex.push(str[i]);
    } else {
      return -1;
    }
  }
  console.log(arrayOfIndex);
}
console.log(firstToLast("Audrey", "y"));
