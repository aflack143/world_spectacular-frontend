import './UserVisit.css';
import React, { useEffect, useState } from 'react';
import { useAuth0  } from "@auth0/auth0-react";
import axios from 'axios';

const UserVisit = (props) => {

    const [sessionToken, setSessionToken] = useState('')
    const [userVisitedCountries, setUserVisitedCountries] = useState([])
    const [userDreamVisitCountries, setUserDreamVisitCountries] = useState([])

    const { user } = useAuth0();
    const authLink = (() => {
        const { sub } = user;
        console.log(sub)
         return (sub)
    });
    // const { user } = useAuth0();
    // const { sub, picture } = user;

  
    const findUserCountries = async (e) => { 
        e.preventDefault()
        const userVisited = await axios(`http://localhost:8000/profiles/${sessionToken}/visited/`)  
        setUserVisitedCountries({userVisited})
        console.log(userVisitedCountries);
        updateCountryVisit()
    }
    const findUserDreamCountries = async (e) => { 
        e.preventDefault()
        const userDreamVisit = await axios(`http://localhost:8000/profiles/${sessionToken}/dream_visit/`)  
        setUserDreamVisitCountries({userDreamVisit})
        updateCountryVisit()
    }

    const updateCountryVisit = async () => {
        await axios.post(`http://localhost:8000/profiles/${sessionToken}/${props.countryId}/`).then(resp => {
            console.log(resp)
        })  
        // window.location.reload()
    }
    const fetchUserData = async () => {
        const user = await axios.get(`http://localhost:8000/profiles/${sessionToken}/`)
        const sessionUser = user.data[0].fields
        setSessionToken(sessionUser.token,
        )
    }

    useEffect (async() => {
        // setSessionToken(sub)
        await setSessionToken(authLink)
        fetchUserData()
      }, [])
      console.log(sessionToken);
    //   console.log(setUserDreamVisitCountries);
    return (
            // {props.isAuthenticated &&
        <div className='userVisit'>
            <button onClick={findUserCountries}>Add to Visited Countries</button>
            {/* <button onClick={findUserDreamCountries}>Add to Dream Visit Countries</button> */}
            </div>
        // }
    );
}

export default UserVisit;