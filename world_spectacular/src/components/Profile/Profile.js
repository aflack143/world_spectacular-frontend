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
  // const [sessionToken, setSessionToken] = useState('tested_code')

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

  useEffect (() => {
    fetchUserData()
  }, [])

  return (
    <div>
      {!sessionUser.token ?
        <CreateProfile {...props}/>
        :
        <div id='profile'>
          <h3>{sessionUser.username}</h3>
          <button onClick={() => deleteUserProfile}>Delete Profile</button>
          <div className='profile'>
            <img src={sessionUser.photo_url ? sessionUser.photo_url : picture}alt='profile-picture'/>
            <div>
              <p>{sessionUser.about_me}</p>
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
            <div>
              <h5>Places I want to visit:</h5>
              <ul>
                {userVisit.dreamVisit && userVisit.dreamVisit.map(dreamVisitcountry => {
                  return (
                  <li>{dreamVisitcountry}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        }
    </div>
  );
}

export default Profile;
// export default withAuthenticationRequired(Profile);


        // <EditProfile />
      {/* <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div> */}