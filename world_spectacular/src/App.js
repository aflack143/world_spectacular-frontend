import React from 'react';
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

const App = (props) => {
  const { isLoading, isAuthenticated } = useAuth0();

  return (
      <div className="App">
        <Header {...props} isAuthenticated={isAuthenticated} />
        <main>
          <Route exact path='/' render={() => <Home isAuthenticated={isAuthenticated}/>}/>
          {/* <ProtectedRoute  */}
          <Route 
          exact path='/world' component={World} render={() => <World />}/>
          {/* <ProtectedRoute  */}
          <Route 
          path='/world/photos' component={PictureDisplay} render={() => <PictureDisplay />}/>
          {/* <ProtectedRoute  */}
          <Route 
          exact path='/country/:abbr' component={Country} render={(props) => <Country {...props} />}/>
          <ProtectedRoute path="/profile" component={Profile} render={(props) => <Profile {...props}/>}
          />
        </main>
        <Footer />
      </div>
    );
  // }
}

export default withRouter(App);