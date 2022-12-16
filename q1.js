const arr = [
  [1, 3],
  [8, 10],
  [2, 6],
  [15, 18],
];
const arr1 = [
  [1, 4],
  [4, 5],
];

/**
 * merges overlapping intervals
 */
function mergeArr(arr) {
  arr.sort((a, b) => a[0] - b[0]);
  arr.forEach((tuple, idx) => {
    console.log(idx, arr.length);
    if (idx >= arr.length - 1) return;
    if (arr[idx][1] >= arr[idx + 1][0]) {
      arr[idx][1] = arr[idx + 1][1];
      arr.splice(idx + 1, 1);
    }
  });
  console.log(arr);
}

mergeArr(arr);
mergeArr(arr1);
