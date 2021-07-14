import './Header.css';
import React, { Component, useEffect, useState } from 'react';
import Nav from '../Nav/Nav';


const Header = (props) => { 
    // const [homeUrl, setHomeUrl] = useState('')
  
    // useEffect ((prevProps) => {
    //   (window.location.pathname === '/') ?
    //   setHomeUrl({homeUrl: true})
    //   : setHomeUrl({homeUrl: false})
    // }, 
    // [homeUrl],
    // )
    // console.log(homeUrl)

    return( 
      <header>
        <h1>World Spectacular</h1>
        <Nav />
      </header>
    );
}

export default Header;
