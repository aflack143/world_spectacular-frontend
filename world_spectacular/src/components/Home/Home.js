import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Hover from '../Hover/Hover';
import { useAuth0 } from '@auth0/auth0-react';

const Home = (props) => {

  const { loginWithRedirect, logout } = useAuth0();

  return (
    <div id='home'> 
      {!props.isAuthenticated ? 
      <div className='loginbox'>
        <button className="login" onClick={() => loginWithRedirect()}/>
      </div>
      :
        <div className='icons'>
          {/* <img src={'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ftrevornace%2Ffiles%2F2015%2F11%2Ftaj-mahal-india-1200x740.jpg'}/> */}
            {/* <button><AuthenticationButton /></button> */}
            <div className='left'>
              <Hover rotation={90} timing={500}><Link to={'/world'}><button className='worldbtn'/></Link></Hover>
              <Hover rotation={-90} timing={500}><Link to={'/world/photos'}><button className='photobtn'/></Link></Hover>
            </div>
            <div className='right'>
              <Hover rotation={-90} timing={500}><Link to={`/profile`}><button className='profilebtn'/></Link></Hover>
              <Hover rotation={90} timing={500}><button
      className="logout" onClick={() => logout({ returnTo: window.location.origin,})
      }
    >
    </button></Hover>
            </div>
        </div>
      }
    </div>
  );
}

export default Home;