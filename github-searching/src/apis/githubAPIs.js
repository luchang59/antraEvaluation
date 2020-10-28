import axios from 'axios';
// const axios = require('axios');

const baseUrl = 'https://api.github.com/users';

export const getUserInfo = (username) => 
  axios.get([baseUrl, username].join('/'), {
    auth: {
      username: 'luchang59',
      password: '0a700d2054adeb661f7d7dbe137be33a830913e3',
    }
  }).then((res) => res.data).catch(err=>null)


  export const getUserFollowingInfo = (username, pageIndex, pageSize) => {
    const followingPath = `following`;
    const res = axios.get([baseUrl, username, followingPath].join('/'), {
      auth: {
        username: 'luchang59',
        password: '0a700d2054adeb661f7d7dbe137be33a830913e3',
       },
    }).then((res) => res.data);
    return res;
  };
  
// const getUserInfo = (username) => 
  
  // .then(function(response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // })


  // export const getUserFollowingInfo = (username, pageIndex, pageSize) => {
  //   const followingPath = `following?page=${pageIndex}&per_page=${pageSize}`;
  //   return (
  //     axios.get([baseUrl, username, followingPath].join('/'), {
  //       auth: {
  //         username: '',
  //         password: '',
  //        },
  //     })
  //     .then(function(response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //   );
  // }


  // const res = getUserInfo('luchang59');
  // console.log(res);