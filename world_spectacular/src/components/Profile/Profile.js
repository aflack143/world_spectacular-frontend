import './Profile.css';
import React from 'react';

const Profile = (props) => {
  return (
    <div>
      <h3>Profile</h3>
      <img src={props.sessionUser.photo_url} alt='profile-picture'/>
    </div>
  );
}

export default Profile;