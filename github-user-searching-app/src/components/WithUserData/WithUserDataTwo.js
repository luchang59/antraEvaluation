import React from 'react';
import { getUserFollowingInfo, getUserInfo } from '../../apis/githubAPIs';

class WithUserDataTwo extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     inputText: '',
  //     user: {},
  //     followings: [],
  //   }
  //   this.handleInputOnChange = this.handleInputOnChange.bind(this);
  //   this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
  // }
  
  state = {
    inputText: '',
    user: {},
    followings: [],
  }

  handleInputOnChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  handleInputKeyUp = (event) => {
    if (event.key === 'Enter') {
      const username = this.state.inputText;
      console.log('search');
      const userInfo = getUserInfo(username);
      console.log(userInfo);
      this.setState({
        user: userInfo,
      });
    }
    // console.log(this.state)
  };

  // componentDidMount() {
  //   getUserInfo(username).then((data) => {
  //     this.setState({
  //       userInfo: data,
  //     });
  //   });
  // }

  render() {

    let user = this.state.user;

    return (
      <div>
        <div className='wrapper'>
          <div id='search-bar'>
            <input
              input="text"
              className='userinfo__input'
              placeholder="please input usename and hit enter"
              onChange={this.handleInputOnChange}
              onKeyUp={this.handleInputKeyUp}
              value={this.state.inputText} 
            />          
          </div>
          {/* {user} */}
        </div>
      </div>
    )
  }
}

export default WithUserDataTwo;
