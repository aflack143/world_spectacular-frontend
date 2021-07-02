import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav>
        <p>Menu Bar</p>
        <ul>
          <li><Link to={'/world'}>World View</Link></li>
          <li><Link to={`/profile/${props.sessionUser.id}`}>My Profile</Link></li>
          <li><Link to={'/'}>Logout</Link></li>
        </ul>
    </nav>
  );
}

export default Nav;