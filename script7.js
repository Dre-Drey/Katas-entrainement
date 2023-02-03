function repeatStr(n, s) {
  let string = s;
  for (let i = 0; i < n - 1; i++) {
    string = s + string;
  }
  return string;
}

console.log(repeatStr(12, "Audrey"));

//OU

function repeatStr2(n, s) {
  return s.repeat(n);
}

console.log(repeatStr2(8, "Hello"));
