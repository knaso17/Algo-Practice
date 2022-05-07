const pairSum = require('./pairSum');
describe("Pair Sum Function Suite", () => {

  test('pairSum returns an array', () => {
    expect(Array.isArray(pairSum([4, 3, 8, 1, -1], 0))).toBe(true);
  });

  test('pairSum returns an empty array when the target sum can\'t be found', () => {
    expect(pairSum([8, 5, 3], 2)).toStrictEqual([]);
  });

  test('pairSum does\'t use the same number twice', () => {
    expect(pairSum([5, 11, -1], 10)).toStrictEqual([11, -1]);
  });

  test('assorted test cases with target sum available', () => {
    expect(pairSum([1, 2, 3, 8, 4], 6)).toStrictEqual([2, 4]);
    expect(pairSum([5, 10, 20, 30, 35], 40)).toStrictEqual([5, 35]);
    expect(pairSum([8, 10, 6, 4, -4], 4)).toStrictEqual([8, -4]);
    expect(pairSum([10, 3, 2, 9, 60, 70], 80)).toStrictEqual([10, 70]);
  });
});
