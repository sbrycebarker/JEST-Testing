const axios = require('axios');

const functions = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = {firstName: 'Sergio'}
    user['lastName'] = 'Subiboi'
    return user;
  },
  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
  .then(res => res.data)
  .catch(err => 'error')
};

module.exports = functions
