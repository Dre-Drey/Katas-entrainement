function giveMeFive(obj) {
  //coding here
  let array = [];
  for (let key in obj) {
    if (key.length == 5) {
      array.push(key);
    }
    if (obj[key].length == 5) {
      array.push(obj[key]);
    }
  }
  console.log(array);
  return array;
}
giveMeFive({ Our: "earth", is: "a", beautyful: "world" });
