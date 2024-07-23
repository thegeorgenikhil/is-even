import { isEven } from '../src';

test('isEven', () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(3)).toBe(false);
});