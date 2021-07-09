import axios from 'axios';
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import World from './components/World/World';
import Country from './components/Country/Country';
import ProtectedRoute from "./auth/protected-route";

// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       sessionUser: {
//         name: 'andrea',
//         username: 'aflack143',
//         photo_url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg',
//         id: 1,
//       },
//       isLoggedIn: true,
//     }
//   }
const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Home />;
  }
  // render() {
    return (
      <div className="App">
        {/* <Header sessionUser={this.state.sessionUser}/> */}
        <Header />
        <main>
           <Route exact path='/' render={() => <Home />}/>
           {/* <Route exact path='/world' render={() => <World />}/>
           <Route exact path='/country/:abbr' render={(props) => <Country {...props}/>}/> */}
           <ProtectedRoute exact path='/world' component={World} render={() => <World />}/>
           <ProtectedRoute exact path='/country/:abbr' component={Country} render={(props) => <Country {...props}/>}/>
           <ProtectedRoute path="/profile" component={Profile} render={(props) => <Profile {...props} sessionUser={this.state.sessionUser}/>}/>
           {/* <ProtectedRoute path="/profile" render={(props) => <Profile />} /> */}
           {/* <Route exact path='/profile/:id' render={(props) => <Profile {...props} sessionUser={this.state.sessionUser}/>}/> */}
           {/* <Route path="/external-api" component={ExternalApi} /> */}
        </main>
        <Footer />
      </div>
    );
  // }
}

export default App;
