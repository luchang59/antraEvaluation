import axios from 'axios';
// const axios = require('axios');

const baseUrl = 'https://api.github.com/users';

export const getUserInfo = (username) => 
// const getUserInfo = (username) => 
  axios.get([baseUrl, username].join('/'), {
    auth: {
      username: 'luchang59',
      password: '3d43dd0286afd5eb8ad3812e618031f2d0d65492',
     },
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })


  export const getUserFollowingInfo = (username, pageIndex, pageSize) => {
    const followingPath = `following?page=${pageIndex}&per_page=${pageSize}`;
    return (
      axios.get([baseUrl, username, followingPath],join('/'), {
        auth: {
          username: 'luchang59',
          password: '3d43dd0286afd5eb8ad3812e618031f2d0d65492',
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


  getUserInfo('luchang59');

// export const fetchDailyData = async () => {
//   try {
//       const { data } = await axios.get(`${url}/daily`);
//       const modifiedData = data.map((dailyData) => ({
//           confirmed: dailyData.confirmed.total,
//           deaths: dailyData.deaths.total,
//           date: dailyData.reportDate,
//       }))
//       return modifiedData;
//   } catch (error) {

//   }
// }