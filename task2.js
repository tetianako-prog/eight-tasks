function moveZeros(arr) {
  const newArr = [];
  const zerosArr = [];
  arr.forEach(item => {
    if (item !== 0) {
      newArr.push(item);
    } else {
      zerosArr.push(item);
    }
  });
  return newArr.concat(zerosArr);
}
