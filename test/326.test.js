import sum from '../src/326'

test('is isPowerOfThree', () => {

  expect(sum(6)).toBe(false);
  expect(sum(9)).toBe(true);
  expect(sum(29)).toBe(false);
});