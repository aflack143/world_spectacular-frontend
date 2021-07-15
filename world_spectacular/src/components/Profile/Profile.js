import './Profile.css';
import React, { useState } from 'react';
import { useAuth0  } from "@auth0/auth0-react";
import CreateProfile from '../CreateProfile/CreateProfile';
import EditProfile from '../EditProfile/EditProfile';
import axios from 'axios';

const Profile = (props) => {
  const { user } = useAuth0();
  const { sub, picture, email } = user;

  //     const [profile, setProfile] = useState({
  //       token: sub,
  //       username: '',
  //       photo_url: '',
  //       about_me: '',
  //       country: '',
  // })

  const [sessionUser, setSessionUser] = useState({})
  const [activeProfile, setActiveProfile] = useState({})
  const [sessionToken, setSessionToken] = useState(sub)

  const fetchUserData = async (input) => {
    const user = await axios.get(`http://localhost:8000/profiles/${sessionToken}/`)
    const sessionUser = user.data[0].fields
    setSessionUser({
      token: sessionUser.token,
      username: sessionUser.username,
      photo_url: sessionUser.photo_url,
      about_me: sessionUser.about_me,
      country: sessionUser.country,
    })
  }

  console.log(sessionUser)

  useState (() => {
    fetchUserData()
  }, [])

console.log(`http://localhost:8000/profiles/${sessionToken}/`)
  return (
    <div>
      {!sessionUser.token ?
        <CreateProfile {...props}/>
        :
        <div id='profile'>
          <h3>{sessionUser.username}</h3>
          <div className='profile'>
            <img src={sessionUser.photo_url ? sessionUser.photo_url : picture}alt='profile-picture'/>
            <div>
              <p>test</p>
              {/* <p>{props.user.name}</p>
              <p>{props.user.country}</p> */}
            </div>
          </div>
          <div className='places'>
            <div>
              <h5>Places visited:</h5>
              <li>test</li>
            </div>
            <div>
              <h5>Places I want to visit:</h5>
              <li>test</li>
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