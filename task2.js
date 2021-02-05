function moveZeros(arr) {
  const newArr = [];
  arr.forEach(item => {
    if (item !== 0) {
      newArr.push(item);
    }
  });
  const zeroesQuantity = arr.length - newArr.length;
  for (let i = 0; i < zeroesQuantity; i += 1) {
    newArr.push(0);
  }
  return newArr;
}
