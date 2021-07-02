
import './World.css';
import React from 'react';
import { Link } from 'react-router-dom';

const World = (props) => {

    const countries = props.countries
    const sortedCountries = countries.sort((a,b) => {
        let nameA = a.name.replace(/\b(\w)/g, s => s.toUpperCase());
        let nameB = b.name.replace(/\b(\w)/g, s => s.toUpperCase());
        if (a.name === 'Åland Islands') {
            a.name = 'Aland Islands';
            if (nameA < nameB) {
                return -1;
            } if (nameA > nameB) {
                return 1;
            } return 0;
        } else if (b.name === 'Åland Islands') {
            b.name = 'Aland Islands';
            if (nameA < nameB) {
                return -1;
            } if (nameA > nameB) {
                return 1;
            } return 0;
        } else {
            if (nameA < nameB) {
                return -1;
            } if (nameA > nameB) {
                return 1;
            } return 0;
        }
    })

  return (
    <div id='world'>
        <h3>Countries around the WORLD</h3>
        <img src='https://geology.com/world/world-map.gif' alt='world_map' />
        <div>
            <Link to='/country/search'>Search for a Country</Link>
        </div>
        <div className='world-container'>
            {props.countries.map(country => {
                return (
                    <li className='country-box'>
                        <Link to={`/country/${country.alpha3Code}`}>
                            {country.name} ({country.alpha3Code})
                        </Link>
                    </li>
                )
            })}
        </div>
    </div>
  );
}

export default World;