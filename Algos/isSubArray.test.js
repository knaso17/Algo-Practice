const isSubArray = require('./isSubArray');

describe("Is Sub Array Function Suite", () => {

  test('isSubArray returns a boolean', () => {
    expect(typeof isSubArray([1], [1])).toBe("boolean");
  });

  test('isSubArray returns false if the 2nd array is not a valid sub array', () => {
    expect(isSubArray([1], [3])).toStrictEqual(false);
  });

  test('isSubArray returns true if the 2nd array is a valid sub array', () => {
    expect(isSubArray([1], [1])).toStrictEqual(true);
  });

  test('isSubArray returns false if the values are out of order', () => {
    expect(isSubArray([1, 2, 3], [1, 3, 2])).toStrictEqual(false);
  });

  test('assorted additional test cases', () => {
    expect(isSubArray([15, 8 , 9 , 22, 40, 1, 6], [8, 9, 6])).toStrictEqual(true);
    expect(isSubArray([45, 2, 1, 3, 9], [88, 12, 9])).toStrictEqual(false);
    expect(isSubArray([89, 12, 45, 67, 1, 100], [12, 67, 100])).toStrictEqual(true);
    expect(isSubArray([1, 2, 3, 12, 3], [2, 3, 12, 90])).toStrictEqual(false);
  });
});
