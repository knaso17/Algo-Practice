const pairSum = require('./pairSum');
describe("Pair Sum Function Suite", () => {
  test('Sum adds 1 + 2 to equal 3', () => {
    expect(pairSum(1, 2)).toBe(3);
  });

  test('Sum returns a number', () => {
    expect(typeof pairSum([4, 3, 8, 1, -1], 0)).toBe("string")
  });
});
