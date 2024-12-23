const Coords = (function () {
  const validateCoords = function (a, b) {
    if (a <= 7 && a >= 0 && b <= 7 && b >= 0) return [a, b];
  };
  const getCoords = function (a, b) {
    let values = [];
    values.push(validateCoords(a + 2, b + 1));
    values.push(validateCoords(a + 2, b - 1));
    values.push(validateCoords(a - 2, b + 1));
    values.push(validateCoords(a - 2, b - 1));
    values.push(validateCoords(a + 1, b + 2));
    values.push(validateCoords(a + 1, b - 2));
    values.push(validateCoords(a - 1, b + 2));
    values.push(validateCoords(a - 1, b - 2));
    return values;
  };
  return {
    getCoords,
  };
})();

export { Coords };
