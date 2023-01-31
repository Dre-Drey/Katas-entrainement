function digitize(n) {
  //code here
  let array = [];
  let nSplitted = n.toString().split("");
  for (let i = nSplitted.length - 1; i >= 0; i--) {
    array.push(parseInt(nSplitted[i]));
  }
  return array;
}
console.log(digitize(35231));
