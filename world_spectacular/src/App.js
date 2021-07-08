import axios from 'axios';
import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import World from './components/World/World';
import Country from './components/Country/Country';

class App extends Component {
  constructor(props){
    super(props)
  //   this.state = {
  //     sessionUser: {
  //       name: 'andrea',
  //       username: 'aflack143',
  //       photo_url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg',
  //       id: 1,
  //     },
  //     isLoggedIn: true,
  //   }
  // }
      this.state = {
        data: {
            username:"",
            password:""
        }
    }
  }


  render() {
    return (
      <div className="App">
        <Header />
        <main>
           <Route exact path='/' render={() => <Home />}/>
           <Route exact path='/world' render={() => <World />}/>
           <Route exact path='/country/:abbr' render={(props) => <Country {...props}/>}/>
           <Route exact path='/profile/:id' render={(props) => <Profile {...props} sessionUser={this.state.sessionUser}/>}/>
          {/* <Login />
          <Signup /> */}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
