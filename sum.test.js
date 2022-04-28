const sum = require('./sum');
describe("Sum Function Suite", () => {
  test('Sum adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test.skip('Sum returns a number', () => {
    expect(typeof sum(4, 3)).toBe("number")
  });
});

