const pairSum = require('./pairSum');
describe("Pair Sum Function Suite", () => {

  test('pairSum returns an array', () => {
    expect(Array.isArray(pairSum([4, 3, 8, 1, -1], 0))).toBe(true);
  });

  test('pairSum returns an empty array when the target sum can\'t be found', () => {
    expect(pairSum([8, 5, 3], 2)).toStrictEqual([]);
  });

  test('pairSum does\'t use the same number twice', () => {
    let expected = [-1, 11];
    expect(pairSum([5, 11, -1], 10)).toEqual(expect.arrayContaining(expected));
  });

  test('assorted test cases with target sum available', () => {
    let expected1 = [2, 4];
    let expected2 = [5, 35];
    let expected3 = [-4, 8];
    let expected4 = [10, 70];

    expect(pairSum([1, 2, 3, 8, 4], 6)).toEqual(expect.arrayContaining(expected1));
    expect(pairSum([5, 12, 20, 30, 35], 40)).toEqual(expect.arrayContaining(expected2));
    expect(pairSum([8, 10, 6, 4, -4], 4)).toEqual(expect.arrayContaining(expected3));
    expect(pairSum([10, 3, 9, 60, 70, 22], 80)).toEqual(expect.arrayContaining(expected4));
  });
});
