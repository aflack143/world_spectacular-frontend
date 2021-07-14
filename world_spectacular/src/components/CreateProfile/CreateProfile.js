import './CreateProfile.css';
import React, { useState } from 'react';
import { useAuth0  } from "@auth0/auth0-react";

const CreateProfile = (props) => {

    const { user } = useAuth0();
    const { nickname, picture, sub } = user;

    const [profile, setProfile] = useState({
        token: sub,
        username: '',
        photo_url: '',
        about_me: '',
        country: '',
    })
    console.log(sub)

    const handleOnChange = (e) => {
        const value = e.target.value
        setProfile({
            ...profile,
            [e.target.name]: value
        });
        console.log(profile.token, profile.username, profile.photo_url, profile.about_me, profile.country)
    }

        return (
            <>
            <div id='createProfile'>   
                <h2>Let's begin your journey</h2>
                <form 
                // onSubmit={(evt) => props.createTweet(evt, content)}
                >
                    <div>
                        <label for='username'>Username:</label>
                        <input className='create' type='text' name='username' placeholder='username'
                            value={profile.username} 
                            defaultValue={nickname}
                            onChange={handleOnChange}
                            />
                    </div>
                    <div>
                        <label for='photo_url'>Profile Picture:</label>
                        <input className='create' type='text' name='photo_url' placeholder='photo url address' 
                        value={profile.photo_url} 
                        defaultValue={picture}
                            onChange={handleOnChange}
                            />
                    </div>
                    <div>
                        <label for='about_me'>About Me:</label>
                        <textarea className='create' type='text' rows='3' maxlength='500' name='about_me' placeholder='about me'
                            value={profile.about_me}
                            onChange={handleOnChange}
                            />
                    </div>
                    <div>
                        <label for='country'>Country:</label>
                        <select className='create' type="dropdown" name="country" 
                        value={profile.country} 
                        onChange={handleOnChange}
                            >
                            <option value="country">country</option>
                        </select>
                    </div>
                    <input type='submit' value='create profile'/>
                </form>
            </div>
        </>
        );
    // }
}

export default CreateProfile;