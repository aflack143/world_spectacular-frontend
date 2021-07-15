import React, { useEffect, useState } from 'react';
import { Route, withRouter} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import World from './components/World/World';
import Country from './components/Country/Country';
import ProtectedRoute from "./auth/protected-route";
import PictureDisplay from './components/PicturesDisplay/PictureDisplay';
import Nav from './components/Nav/Nav';

const App = (props) => {
  const { isLoading, isAuthenticated } = useAuth0();

  // if (isLoading) {
  //   return <Home />;
  // }

  // const [homeUrl, setHomeUrl] = useState('')
  
  // useEffect (() => {
  //   (window.location.pathname === '/') ?
  //   setHomeUrl({homeUrl: true})
  //   : setHomeUrl({homeUrl: false})
  // }, 
  // [window.location.pathname],
  // )
  
    return (
      <div className="App">
        <Header {...props} isAuthenticated={isAuthenticated} />
        {/* {!homeUrl && 
        <Nav {...props} isAuthenticated={isAuthenticated}
        homeUrl={homeUrl}/>
        } */}
        <main>
          <Route exact path='/' render={() => <Home isAuthenticated={isAuthenticated}/>}/>
          {/* <ProtectedRoute  */}
          <Route exact path='/world' render={() => <World />}/>
          {/* <ProtectedRoute  */}
          <Route path='/world/photos' render={() => <PictureDisplay />}/>
          {/* <ProtectedRoute  */}
          <Route exact path='/country/:abbr' render={(props) => <Country {...props}/>}/>
          <ProtectedRoute path="/profile" component={Profile} render={(props) => <Profile {...props}/>}/>
        </main>
        <Footer />
      </div>
    );
  // }
}

export default withRouter(App);