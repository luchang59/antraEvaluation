import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import Header from './components/Header/Header'
import Layout from './components/Layout/Layout';
import { getUserInfo, getUserFollowingInfo } from './apis/githubAPIs';
// import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  const [inputText, setInputText] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [following, setFollowing] = useState([]);
  const [activePage, setActivePage] = useState('Home');
  const [loding, setLoading] = useState(false);

  const handleInputChange = (event) => {
    console.log('typing');
    setInputText(event.target.value);
    console.log(inputText);
  };

  let content;

  const handleChangeActivePage = (event) => {
    setActivePage(event.target.innerText);
    console.log(activePage);

  }

  const  handleInputKeyUp = async (event) => {
    if (event.key === 'Enter' && activePage === 'Home') {
      setUserInfo(null);
      setLoading(true);
      const res = await getUserInfo(inputText);
      setUserInfo(res);
      setLoading(false);
    } else if (event.key === 'Enter' && activePage === 'Following') {
      console.log('teststststst');
      setUserInfo(null);
      setLoading(true);
      const res = await getUserInfo(inputText);
      const followingRes = await getUserFollowingInfo(inputText);
      setUserInfo(res);
      setFollowing(followingRes);
      console.log(following);
      setLoading(false);
    }
  };

  switch(activePage) {
    case 'Home':
      if (loding === true) {
        console.log('loading');
        content = <p>Loading</p>
      } else if (userInfo) {
        content = <div>
          <img src={userInfo.avatar_url} style={{width: 150}}/>
          <p>username: {userInfo.login}</p>
          <p>follower: {userInfo.followers}</p>
        </div>
      } else if(userInfo === null) {
        content = <p>Can not find the user.</p>
      };
      break;
    case 'Following':
      if (loding === true) {
        console.log('loading');
        content = <p>Loading</p>
      } else if (userInfo && following) {
        content = <div>
          <img src={userInfo.avatar_url} style={{borderRadius: 100, width: 150}}/>
          <p>username: {userInfo.login}</p>
          <p>follower: {userInfo.followers}</p>
          <ul>
            {following.map((follow) => 
              (<li key={follow.id}>{follow.login}</li>)
            )}
          </ul>        
        </div>
      } else if(userInfo === null) {
        content = <p>Can not find the user.</p>
      };
      break;
  }
  

  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Header></Header> */}]
      <Layout
        handleChangeActivePage={handleChangeActivePage}
        handleInputChange={handleInputChange}
        handleInputKeyUp={handleInputKeyUp}
        content={content}
        inputText={inputText}
      >


      </Layout>

    </div>
  );
}

export default App;
