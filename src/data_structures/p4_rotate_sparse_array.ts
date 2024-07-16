function rotateArrayToRight(arr: any[], steps: number) {
  const arrLength = arr.length;
  const rotated = [];
  for (let index = 0; index < arrLength; index++) {
    rotated[(index + steps) % arrLength] = arr[index];
  }
  return rotated;
}

const testSparseArrayRotation = () => {
  const sparseArray = [1, null, 2, null, 3];
  const rotationSteps = 2;
  const rotatedSparseArray = rotateArrayToRight(sparseArray, rotationSteps);
  console.log("Original sparse array:", sparseArray);
  console.log("Steps to rotate:", rotationSteps);
  console.log(`After rotate ${rotationSteps} steps: `, rotatedSparseArray); // [2, null, 3, null, 1]
};
testSparseArrayRotation();
