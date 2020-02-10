import sum from '../src/lcp1'

test('01', () => {
  expect(sum([1, 2, 3], [1, 2, 3])).toBe(3);
});