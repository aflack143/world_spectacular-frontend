import './UserVisit.css';
import React, { useEffect, useState } from 'react';
import { useAuth0  } from "@auth0/auth0-react";
import axios from 'axios';

const UserVisit = (props) => {

    const { user } = useAuth0();
    const { sub } = user;

    const [sessionToken, setSessionToken] = useState(sub)
    const [userVisitedCountries, setUserVisitedCountries] = useState({})
    const [userDreamVisitCountries, setUserDreamVisitCountries] = useState({})
  
    const findUserCountries = async (e) => { 
        e.preventDefault()
        console.log('btn clicked')
        const userVisited = await axios(`http://localhost:8000/profiles/${sessionToken}/visited/`)  
        console.log(userVisited);
        setUserVisitedCountries({})
        updateCountryVisit()
    }
    const findUserDreamCountries = async (e) => { 
        e.preventDefault()
        console.log('btn clicked')
        const userDreamVisit = await axios(`http://localhost:8000/profiles/${sessionToken}/dream_visit/`)  
        console.log(userDreamVisit);
        setUserDreamVisitCountries({})
        updateCountryVisit()
    }


    const updateCountryVisit = async () => {
        await axios.post(`http://localhost:8000/profiles/${sessionToken}/${props.countryId}/`).then(resp => {
            console.log(resp)
            // const updateVisit = resp.data[0]
            // setUserVisitedCountries({
            // })
        })  
        // console.log(countryVisit)
        // const updatedVisit = countryVisit.map(visited => {
        //     return (visited)
        // })
        // window.location.reload()
    }

    return (
        <div>
            <button onClick={findUserCountries}>Add to Visited Countries</button>
            <button onClick={findUserDreamCountries}>Add to Dream Visit Countries</button>
        </div>
    );
}

export default UserVisit;