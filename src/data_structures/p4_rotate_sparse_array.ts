// Rotate a sparse array to the right by k steps
function rotateArrayToRight(arr: any[], steps: number) {
  const arrLength = arr.length;
  const rotatedArr = [];
  // Loop through the array
  for (let index = 0; index < arrLength; index++) {
    // Use modulo to get the new index after rotation, in case steps > arrLength
    // New index = (index + steps) % arrLength
    // Example: If the array length is 5 and steps is 6 > 5
    // Element at index 0 ((0+6) % 5 = 1) will be at index 1 after rotation
    rotatedArr[(index + steps) % arrLength] = arr[index];
  }
  return rotatedArr;
}

const testSparseArrayRotation = () => {
  const sparseArray = [1, null, 2, null, 3];
  const rotationSteps = 2;
  const rotatedSparseArray = rotateArrayToRight(sparseArray, rotationSteps);
  console.log("Original sparse array:", sparseArray);
  console.log(`Rotate sparse array to right by ${rotationSteps} steps`);
  console.log(`After rotate ${rotationSteps} steps: `, rotatedSparseArray);
};
testSparseArrayRotation();
