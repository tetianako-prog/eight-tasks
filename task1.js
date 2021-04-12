function common(arr1, arr2, arr3) {
  let res = 0;
  for (const item of arr1) {
    if (arr2.includes(item) && arr3.includes(item)) {
      res += item;
    }
  }
  return res;
}
