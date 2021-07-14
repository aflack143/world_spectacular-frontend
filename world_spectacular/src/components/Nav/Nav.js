import './Nav.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationButton from '../AuthenticationButton/AuthenticationButton';

const Nav = (props) => {
  return (
    <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/world'}>World View</Link></li>
          <li><Link to={'/world/photos'}>Photos</Link></li>
          <li><Link to={`/profile`}>Profile</Link></li>
          <li><AuthenticationButton /></li>
        </ul>
    </nav>
  )
}

export default Nav;