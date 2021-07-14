import './Home.css';
import React, { Component } from 'react';
import AuthenticationButton from '../AuthenticationButton/AuthenticationButton';
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton/LoginButton';

const Home = (props) => {

return (
  <div id='home'> 
    {!props.isAuthenticated ? 
      <LoginButton />
    :
    <ul>
        {/* <img src={'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ftrevornace%2Ffiles%2F2015%2F11%2Ftaj-mahal-india-1200x740.jpg'}/> */}
          {/* <button><AuthenticationButton /></button> */}
        <li><Link to={'/world'}>World View</Link></li>
        <li><Link to={'/world/photos'}>Photos</Link></li>
        <li><Link to={`/profile`}>Profile</Link></li>
        <li><AuthenticationButton /></li>
      </ul>}
    </div>
  );
}

export default Home;