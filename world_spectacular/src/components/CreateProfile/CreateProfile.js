import './CreateProfile.css';
import React, { useEffect, useState } from 'react';
import { useAuth0  } from "@auth0/auth0-react";
import axios from 'axios';

const CreateProfile = (props) => {

    const { user } = useAuth0();
    const { nickname, picture, sub } = user;

    const [world, setWorld] = useState({})
    const [users, setUsers] = useState({})
    const [profile, setProfile] = useState({
        token: sub,
        username: null,
        photo_url: null,
        about_me: null,
        country: null,
    })

    const handleOnChange = (e) => {
        const value = e.target.value
        setProfile({
            ...profile,
            [e.target.name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const dataUser = await axios.post('http://localhost:8000/profiles/create/', {data: profile})
        console.log(dataUser)
        // const newUser = { id: dataUser[0].pk, ...dataUser[0].profile }
        // console.log(newUser)
        // const users = users
        // users.push(newUser)
        // setUsers({
        //     users: users
        // })
        // this.props.history.push('/world');
    }

        return (
            <>
            <div id='createProfile'>   
                <h2>Let's begin your journey</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label for='username'>Username:</label>
                        <input className='create' type='text' name='username' placeholder='username'
                            value={profile.username} 
                            // defaultValue={nickname}
                            onChange={handleOnChange}
                            />
                    </div>
                    <div>
                        <label for='photo_url'>Profile Picture:</label>
                        <input className='create' type='text' name='photo_url' placeholder='photo url address' 
                        value={profile.photo_url} 
                        // defaultValue={picture}
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
                    {/* <div>
                        <label for='country'>Country:</label>
                        <select className='create' type="dropdown" name="country" 
                        value={profile.country} 
                        onChange={handleOnChange}
                            >
                            <option value="country">country</option>
                        </select>
                    </div> */}
                    <input type='submit' htmlType='submit' value='create profile'/>
                </form>
            </div>
        </>
        );
    // }
}

export default CreateProfile;