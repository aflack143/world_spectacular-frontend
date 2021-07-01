import './Header.css';
import React from 'react';
import Nav from '../Nav/Nav';


const Header = (props) => {
  return (
    <header>
        <h1>World Spectacular</h1>
        {props.sessionUser && <Nav />}
    </header>
  );
}

export default Header;
