function memoize(fn) {
  const cache = {};

  return function (arg) {
    if (cache[arg]) {
      return cache[arg];
    }

    const result = fn(arg);
    cache[arg] = result;

    return result;
  };
}
