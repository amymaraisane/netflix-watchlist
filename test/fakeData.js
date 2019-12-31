const fetch = require('node-fetch');

const throwNon200 = response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response;
  };

exports.getRandomUser = () =>{
  fetch('https://randomuser.me/api/')
    .then(throwNon200)
    .then(res => res.json())
    .catch(e => console.log('Error getting random user: ', e.message));
}

module.exports = exports
      