import axios from 'axios';
import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Profile from './components/Profile/Profile';
import World from './components/World/World';
import Country from './components/Country/Country';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sessionUser: null,
      countries: []
    }
  }

  async componentDidMount() {
    const countries = await axios('https://restcountries.eu/rest/v2/all');
    // const worldArr = countries.data.split('><').join(',').split('|').join(':').replace('>', '').replace('<', '').split(',')
    console.log(countries.data)
    this.setState({
      countries: countries.data
    })
  }

  render(){
    return (
      <div className="App">
        <Header sessionUser={this.state.sessionUser}/>
        <main>
           <Route exact path='/world' render={() => <World countries={this.state.countries}/>}/>
           <Route exact path='/country/:abbr' render={(props) => <Country {...props}/>}/>
           <Route exact path='/login' render={(props) => <Login />}/>
           <Route exact path='/signup' render={(props) => <Signup />}/>
           <Route exact path='/profile/:id' render={(props) => <Profile {...props} sessionUser={this.state.sessionUser}/>}/>
          <Login />
          <Signup />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
