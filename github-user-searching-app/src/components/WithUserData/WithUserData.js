import React, { useState } from 'react';
// import { getUserInfo, getUserFollowingInfo } from '../../apis/githubAPIs';
import axios from 'axios';
import Loading from '../Loading/Loading';
import UserDataList from '../UserDataList/UserDataList';


class WithUserData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      data: '',
    }
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    this.fetchData(this.props.data)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      this.setState({
        display: false,
        loading: true,
      })
      this.fetchData(this.props.data)
    }
  }

  fetchData(url) {
    this.setState({
      loading: true,
      display: false,
    })
    setTimeout(() => {
      axios.get(url, {
        auth: {
          username: 'luchang59',
          password: '3d43dd0286afd5eb8ad3812e618031f2d0d65492',
         },
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          loading: false,
          display: true,
          data,
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    }, 500);
  }

  render() {
    if (this.state.loading === true) {
      return <div className='user-info-loading'><Loading /></div>
    } else if (this.state.display === false) {
      return <div></div>
    }

    let user_following_list;
    if (this.state.data[0].full_name) {
      user_following_list = <UserDataList props={true} data={this.state.data} />
    }else {
      user_following_list = <UserDataList data={this.state.data} />
    }

    return (
      <div className='user-data-grid'>
        <div className='data-wrapper'>
          {user_following_list}
        </div>
      </div>
    )
  }
}

export default WithUserData;