// test/math.test.ts
import sum from '../packages/utils/vanilla/sum';

test('add 1+2=3', async () => {
  expect(sum(1, 2)).toBe(3);
});

test('add 2+2=4', () => {
  expect(sum(2, 2)).toBe(4);
});
