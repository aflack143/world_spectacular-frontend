import './Home.css';
import React, { Component } from 'react';
import AuthenticationButton from '../AuthenticationButton/AuthenticationButton';
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton/LoginButton';
import Hover from '../Hover/Hover';
import LogoutButton from '../LogoutButton/LogoutButton';

const Home = (props) => {

  return (
    <div id='home'> 
      {!props.isAuthenticated ? 
        <LoginButton />
      :
        <div className='icons'>
          {/* <img src={'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ftrevornace%2Ffiles%2F2015%2F11%2Ftaj-mahal-india-1200x740.jpg'}/> */}
            {/* <button><AuthenticationButton /></button> */}
            <div className='left'>
              <Hover className='worldbtn' rotation={40} timing={500}><Link to={'/world'}><button>World View</button></Link></Hover>
              <Hover className='photobtn' rotation={-40} timing={500}><Link to={'/world/photos'}><button>Photos</button></Link></Hover>
            </div>
            <div className='right'>
              <Hover className='profilebtn' rotation={-40} timing={500}><Link to={`/profile`}><button>Profile</button></Link></Hover>
              <Hover className='logoutbtn' rotation={40} timing={500}><AuthenticationButton /></Hover>
            </div>
        </div>
      }
    </div>
  );
}

export default Home;