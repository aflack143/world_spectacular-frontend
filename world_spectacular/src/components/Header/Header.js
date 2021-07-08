import './Header.css';
import React from 'react';
import Nav from '../Nav/Nav';


const Header = (props) => {      
  return(
    <header>
      <h1>World Spectacular</h1>
      <Nav sessionUser={props.sessionUser}/>
    </header>
  );
}

export default Header;
