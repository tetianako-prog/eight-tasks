function same(...args) {
  let newArr = args.map(item => item.split('').sort().join(''));
  return newArr.every((item, i, arr) => item === arr[0]);
}
