//Trier un tableau (algorithme de tri)

function sortArray(arrayToSort) {
  //comparer les elements par paire et les permuter si celui de gauche > celui de droite
  let checked;
  do {
    checked = false;
    for (let i = 0; i < arrayToSort.length - 1; i++) {
      if (arrayToSort[i] > arrayToSort[i + 1]) {
        //swapper des variables
        arrayToSort[i] = arrayToSort[i] + arrayToSort[i + 1];
        arrayToSort[i + 1] = arrayToSort[i] - arrayToSort[i + 1];
        arrayToSort[i] = arrayToSort[i] - arrayToSort[i + 1];
        checked = true;
      }
    }
  } while (checked);
  return arrayToSort;
}

console.log(sortArray([56, 4, 22, 1]));
