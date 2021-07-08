import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';
import AuthenticationButton from '../AuthenticationButton/AuthenticationButton';

const Nav = (props) => {
  return (
    <nav>
        <p>Menu Bar</p>
        <ul>
          <li><Link to={'/world'}>World View</Link></li>
          {/* <li><Link to={`/profile/${props.sessionUser.id}`}>My Profile</Link></li> */}
          <li><AuthenticationButton /></li>
        </ul>
    </nav>
  );
}

export default Nav;