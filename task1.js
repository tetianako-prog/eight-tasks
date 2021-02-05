function common(arr1, arr2, arr3) {
  const resArr = [];
  for (const item of arr1) {
    if (arr2.includes(item) && arr3.includes(item)) {
      resArr.push(item);
    }
  }
  return resArr.reduce((acc, value) => acc + value);
}
