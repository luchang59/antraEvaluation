import React from 'react';

function Header(props) {
  // const [inputText, setInputText] = useState('');
  // const [userInfo, setUserInfo] = useState({});

  // const handleInputChange = (event) => {
  //   setInputText(event.target.value);
  //   console.log(inputText);
  // };

  // const  handleInputKeyUp = async (event) => {
  //   if (event.key === 'Enter') {
  //     console.log('enter');
  //     const res = await getUserInfo(inputText);
  //     setUserInfo(res);
  //   }
  // };

  // let content;

  // if (userInfo) {
  //   content = <div>
  //     <img src={userInfo.avatar_url} style={{width: 150}}/>
  //     <span>username: {userInfo.login}</span>
  //   </div>
  // }

  const { handleInputChange, handleInputKeyUp, handleChangeActivePage } = props;

  return (
    <div className='header-list'>
      <nav className='nav'>
        <span onClick={handleChangeActivePage}>Home</span>
        <span> </span>
        <span onClick={handleChangeActivePage}>Following</span>
        <span> </span>
        <input 
          type='text'
          className='githubSearch__input'
          placeholder='Please input the username'
          onChange={handleInputChange}
          onKeyUp={handleInputKeyUp}
          // value={inputText}
        /> 
        {/* <button
          className='githubSearch__btn'
          // onClick={}
        >Search</button> */}
      </nav>
    </div>
  )
};

export default Header;