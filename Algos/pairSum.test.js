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

  test('assorted test cases with target sum avaliable', () => {
    expect(pairSum([5, 11, -1], 10)).toStrictEqual([11, -1]);
    expect(pairSum([5, 11, -1], 10)).toStrictEqual([11, -1]);
    expect(pairSum([5, 11, -1], 10)).toStrictEqual([11, -1]);
    expect(pairSum([5, 11, -1], 10)).toStrictEqual([11, -1]);
  });
});
