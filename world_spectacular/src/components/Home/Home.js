import './Home.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

  // handleLoginClick = (e) => {
  //   e.preventDefault()
  //   this.setState(prevState => ({...prevState,
  //     newUser: false
  //   }))
  // }
  // handleSignupClick = (e) => {
  //   e.preventDefault()
  //   this.setState(prevState => ({...prevState,
  //     newUser: true
  //   }))
  // }

  // handleOnChange = (e) => {
  //   this.setState(prevState => ({...prevState,
  //       data: {
  //           ...prevState.data,
  //           [e.target.name]: e.target.value
  //       }
  //   }))
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log('User Logging In')
  //   axios.post("http://localhost:8000/api/token/", this.state.data)
  //   .then(resp => {
  //       this.props.history.push(`/profile/${resp.data.user.id}`)
  //   })
  //   .catch(err => {
  //       console.log(err)
  //   })
  // }

  render() {
    return (
      <div id='home'> 
          {/* <img src={'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ftrevornace%2Ffiles%2F2015%2F11%2Ftaj-mahal-india-1200x740.jpg'}/> */}
          <ul>
              {/* <li className='login'><Link to={'/login'}>Log In</Link></li>
              <li className='signup'><Link to={'/signup'}>Sign Up</Link></li> */}
              <button onclick={this.handleLoginClick}>Log In</button>
              <button onclick={this.handleSignupClick}>Sign Up</button>
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