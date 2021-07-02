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
      sessionUser: {
        name: 'andrea',
        username: 'aflack143',
        photo_url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg',
        id: 1,
      },
      countries: [],
      // country: {},

    }
  }

  async componentDidMount(abbr) {
    const countries = await axios('https://restcountries.eu/rest/v2/all');
    // const worldArr = countries.data.split('><').join(',').split('|').join(':').replace('>', '').replace('<', '').split(',')
    // console.log(countries.data)
    this.setState({
      countries: countries.data
    })
    // const country = await axios(`https://restcountries.eu/rest/v2/alpha/${abbr}`)
    // const country = await axios(`https://restcountries.eu/rest/v2/alpha/${this.props.match.params.abbr}`)
    // console.log(country.data)
    // this.setState({
    //   country: country.data
    // })
    // console.log(this.state.country.name)
  }

  render(){
    return (
      <div className="App">
        <Header sessionUser={this.state.sessionUser}/>
        <main>
           <Route exact path='/' render={() => <img src={'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ftrevornace%2Ffiles%2F2015%2F11%2Ftaj-mahal-india-1200x740.jpg'}/>}/>
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
