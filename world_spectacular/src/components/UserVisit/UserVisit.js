import './UserVisit.css';
import React, { useEffect, useState } from 'react';
import { useAuth0  } from "@auth0/auth0-react";
import axios from 'axios';

const UserVisit = (props) => {

    const { user } = useAuth0();
    const sub = user;

    const [userVisitedCountries, setUserVisitedCountries] = useState(sub)
    // const [userVisitedCountries, setUserVisitedCountries] = useState('')
  
    const findUserCountries = async (e) => { 
        e.preventDefault()
        // const { sub } = user;
        setUserVisitedCountries(userVisitedCountries.sub)
        const userVisited = await axios(`http://localhost:8000/profiles/${userVisitedCountries.sub}/visited/`)  
        console.log(userVisited);
        // const userVisitedCountries = userVisited.map(visited => {
        //     return (visited)
        // })
        // setUserVisited({})
        updateCountryVisit()
    }


    const updateCountryVisit = async () => {
        const countryVisit = await axios.post(`http://localhost:8000/profiles/${userVisitedCountries.sub}/${props.countryId}/`)  
        console.log(countryVisit)
        // const updatedVisit = countryVisit.map(visited => {
        //     return (visited)
        // })
        window.location.reload()
    }

    // useEffect (async () => {
    //     await setUserVisitedCountries(sub)
    //     await findUserCountries()
    // }, [])
    console.log(userVisitedCountries.sub)
    return (
        <div>
            <button onClick={ async() => await findUserCountries}>Add to Visited Countries</button>
            {/* <button onClick={() => 'test'}>Add to Dream Visit Countries</button> */}
        </div>
    );
}

export default UserVisit;