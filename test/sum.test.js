const sum = require('../foldersjs/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum.sum(1, 2)).toBe(3);
});
test('isEven(2)  to equal true', () => {
  expect(sum.isEven(2)).toBe(true);
});