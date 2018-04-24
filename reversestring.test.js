const reverseString = require('./reversestring')


test('reverse string function exists', () => {
  expect(reverseString).toBeDefined();
});

test('String reverses', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

test('reverse...uppercase', () => {
  expect(reverseString('Hello').toLowerCase()).toEqual('olleh');
});
