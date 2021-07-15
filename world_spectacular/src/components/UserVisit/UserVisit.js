import './UserVisit.css';
import React, { useEffect, useState } from 'react';
import { useAuth0  } from "@auth0/auth0-react";
import axios from 'axios';

const UserVisit = (props) => {

    const { user } = useAuth0();
    const { sub } = user;

    const [userVisitedCountries, setUserVisitedCountries] = useState(sub)
    // const [userVisitedCountries, setUserVisitedCountries] = useState('')
  
    const findUserCountries = async (e) => { 
        // const { sub } = user;
        // setUserVisitedCountries(sub)
        const userVisited = await axios(`http://localhost:8000/profiles/${userVisitedCountries}/visited/`)  
        console.log(userVisited);
        // const userVisitedCountries = userVisited.map(visited => {
        //     return (visited)
        // })
        // setUserVisited({})
        updateCountryVisit()
    }


    const updateCountryVisit = async () => {
        const countryVisit = await axios(`http://localhost:8000/profiles/${userVisitedCountries}/${props.countryId}/`)  
        console.log(countryVisit.data)
        // const updatedVisit = countryVisit.map(visited => {
        //     return (visited)
        // })
    }

    // useEffect (() => {
    //     findUserCountries()
    // }, [])
    // console.log(user)
    return (
        <div>
            <button onClick={() => findUserCountries}>Add to Visited Countries</button>
            {/* <button onClick={() => 'test'}>Add to Dream Visit Countries</button> */}
        </div>
    );
}

export default UserVisit;