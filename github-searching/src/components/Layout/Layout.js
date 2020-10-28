import React from 'react';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import './Layout.css';

function Layout(props) {

  const { handleChangeActivePage, handleInputChange, handleInputKeyUp, content, inputText } = props;

  return (
    <>
      <header className="header">
        <Header
          handleChangeActivePage = {handleChangeActivePage}
          handleInputChange={handleInputChange}
          handleInputKeyUp={handleInputKeyUp}
          content={content}
          inputText={inputText}
        ></Header>
      </header>
      <main className="content">
        <HomePage content={content}></HomePage>
      </main>
      {/* <main className="content">{children}</main> */}
    </>
  );
}

export default Layout;
