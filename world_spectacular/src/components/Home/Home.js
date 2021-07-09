import './Home.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AuthenticationButton from '../AuthenticationButton/AuthenticationButton';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
        data: {
            username:"",
            password:"",
        },
        newUser: '',
    }
}

  render() {
    return (
      <div id='home'> 
          {/* <img src={'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ftrevornace%2Ffiles%2F2015%2F11%2Ftaj-mahal-india-1200x740.jpg'}/> */}
          <ul>
              {/* <li className='login'><Link to={'/login'}>Log In</Link></li>
              <li className='signup'><Link to={'/signup'}>Sign Up</Link></li> */}
              <button onclick={this.handleLoginClick}><AuthenticationButton /></button>
              {/* <button onclick={this.handleSignupClick}><SignupButton /></button> */}
          </ul>
          {/* {!this.state.newUser  &&
          <Login handleSubmit={this.handleOnChange} handleSubmit={this.handleSubmit}/>}
          {this.state.newUser &&
          <Signup handleSubmit={this.handleOnChange} handleSubmit={this.handleSubmit}/>} */}
      </div>
    );
  }
}

export default Home;