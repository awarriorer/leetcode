import sum from '../src/38'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1)).toBe('1');
  expect(sum(2)).toBe('11');
  expect(sum(3)).toBe('21');
  expect(sum(4)).toBe('1211');
  expect(sum(5)).toBe('111221');
});