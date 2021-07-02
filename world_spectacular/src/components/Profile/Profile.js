import './Profile.css';
import React from 'react';

const Profile = (props) => {
  return (
    <div id='profile'>
      <h3>
        {/* {props.user.username} */}
      Profile</h3>
      <div className='profile'>
        <img src={props.sessionUser.photo_url} alt='profile-picture'/>
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
  );
}

export default Profile;