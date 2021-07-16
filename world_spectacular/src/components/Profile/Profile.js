import './Profile.css';
import React, { useEffect, useState } from 'react';
import { useAuth0  } from "@auth0/auth0-react";
import CreateProfile from '../CreateProfile/CreateProfile';
import axios from 'axios';

const Profile = (props) => {
  const { user } = useAuth0();
  const { sub, picture } = user;

  const [sessionUser, setSessionUser] = useState({})
  const [userVisit, setUserVisit] = useState({
    visited: [],
    dreamVisit: [],
  })
  const [sessionToken, setSessionToken] = useState(sub)
 
  const getUserVist = async () => {
    const userVisited = await axios(`http://localhost:8000/profiles/${sessionToken}/visited/`)
    const visitedCountryIds =  userVisited.data.map(visit => visit.fields.country)
    const userDreamVisit = await axios(`http://localhost:8000/profiles/${sessionToken}/dream_visit/`)
    const dreamVisitCountryIds =  userDreamVisit.data.map(visit => visit.fields.country)
    setUserVisit({
      visited: visitedCountryIds,
      dreamVisit: dreamVisitCountryIds,
    })
  }

  const fetchUserData = async () => {
    const user = await axios.get(`http://localhost:8000/profiles/${sessionToken}/`)
    const sessionUser = user.data[0].fields
    setSessionUser({
      token: sessionUser.token,
      username: sessionUser.username,
      photo_url: sessionUser.photo_url,
      about_me: sessionUser.about_me,
      country: sessionUser.country,
    })
    getUserVist()
  }

  const deleteUserProfile = async (e) => {
    e.preventDefault()
    await axios.delete(`http://localhost:8000/profiles/${sessionToken}/delete/`)
  }
  const fetchWorldData = async () => {
    const world = await axios(`http://localhost:8000/world/`)
    const allCountryNames = world.data.map(country => {
      return country
    })
  }

  useEffect (() => {
    fetchWorldData()
    setSessionToken(sub)
    fetchUserData()
  }, [])

  return (
    <div id='profileBox'>
      {!sessionUser.token ?
        <CreateProfile {...props}/>
        :
        <div id='profile'>
          <h3>{sessionUser.username}</h3>
          <button onClick={deleteUserProfile}>Delete Profile</button>
          <div className='profile'>
            <img src={sessionUser.photo_url ? sessionUser.photo_url : picture}alt='profile-picture'/>
            <div>
              <p>About me: {sessionUser.about_me}</p>
            </div>
          </div>
          <div className='places'>
            <div>
              <h5>Places visited:</h5>
              <ul>
                {userVisit.visited && userVisit.visited.map(visitedcountry => {
                  return (
                  <li>{visitedcountry}</li>
                  )
                })}
              </ul>
            </div>
            {/* <div>
              <h5>Places I want to visit:</h5>
              <ul>
                {userVisit.dreamVisit && userVisit.dreamVisit.map(dreamVisitcountry => {
                  return (
                  <li>{dreamVisitcountry}</li>
                  )
                })}
              </ul>
            </div> */}
          </div>
        </div>
        }
    </div>
  );
}

export default Profile;