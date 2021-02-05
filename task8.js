function f(a, b) {
  if (b === undefined) {
    return function (c) {
      return a + c;
    };
  } else {
    return a + b;
  }
}
