function getTheFactorial(n) {
  if (n <= 0) {
    return 1;
  }
  return n * getTheFactorial(n - 1);
}

function multiplyArray(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiplyArray(arr, n - 1) * arr[n - 1];
  }
}
console.log(multiplyArray([1, 2, 3, 4, 5], 3));
