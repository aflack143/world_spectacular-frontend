import './UserVisit.css';
import React, { useEffect, useState } from 'react';
import { useAuth0  } from "@auth0/auth0-react";
import axios from 'axios';

const UserVisit = (props) => {

    const { user } = useAuth0();
    const { sub } = user;

    const [sessionToken, setSessionToken] = useState(sub)
    const [userVisitedCountries, setUserVisitedCountries] = useState({})
    // const [userVisitedCountries, setUserVisitedCountries] = useState('')
  
    const findUserCountries = async (e) => { 
        e.preventDefault()
        // const { sub } = user;
        console.log('btn clicked')
        const userVisited = await axios(`http://localhost:8000/profiles/${sessionToken}/visited/`)  
        console.log(userVisited);
        // const userVisitedCountries = userVisited.map(visited => {
        //     return (visited)
        // })
        // setUserVisited({})
        updateCountryVisit()
    }


    const updateCountryVisit = async () => {
        await axios.post(`http://localhost:8000/profiles/${sessionToken}/${props.countryId}/`).then(resp => {
            console.log(resp)
        })  
        // console.log(countryVisit)
        // const updatedVisit = countryVisit.map(visited => {
        //     return (visited)
        // })
        window.location.reload()
    }

    // useEffect (async () => {
    //     await setUserVisitedCountries(sub)
    //     await findUserCountries()
    // }, [])
    // console.log(userVisitedCountries.sub)
    return (
        <div>
            <button onClick={findUserCountries}>Add to Visited Countries</button>
            {/* <button onClick={() => 'test'}>Add to Dream Visit Countries</button> */}
        </div>
    );
}

export default UserVisit;