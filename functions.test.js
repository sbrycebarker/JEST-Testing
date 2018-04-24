const functions = require('./functions');

const initDatabase = () => console.log('Database Initialized')

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('subtracts', () => {
  expect(functions.subtract(2,2)).toBe(0)
})

test('should be null', () => {
  expect(functions.isNull()).toBeNull()
})

test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy()
})

test('User should be Sergio Subiboi object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Sergio',
    lastName: 'Subiboi'
  })
})
// Less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
})

// regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
})

//  Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'kaern', 'admin'];
  expect(usernames).toContain('admin')
})

//  Working with async data ..... promise
test('User fetched name shold be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual('Leanne Graham')
  })
})

// Async Await
test('User fetched name shold be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
})
