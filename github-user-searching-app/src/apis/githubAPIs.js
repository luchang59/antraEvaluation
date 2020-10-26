import axios from 'axios';
// const axios = require('axios');

const baseUrl = 'https://api.github.com/users';

export async function getUserInfo(username) {
  try {
    const res =  await axios.get([baseUrl, username].join('/'), {
      auth: {
        username: '',
        password: '',
       },
    })
    return res;
  } catch (error) {
    console.error(error);
  }
} 
// const getUserInfo = (username) => 
  
  // .then(function(response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // })


  export const getUserFollowingInfo = (username, pageIndex, pageSize) => {
    const followingPath = `following?page=${pageIndex}&per_page=${pageSize}`;
    return (
      axios.get([baseUrl, username, followingPath].join('/'), {
        auth: {
          username: '',
          password: '',
         },
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    );
  }


  // const res = getUserInfo('luchang59');
  // console.log(res);