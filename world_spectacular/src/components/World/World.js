
import './World.css';
import React from 'react';
import { Link } from 'react-router-dom';

const World = (props) => {
  return (
    <div>
        <div className='world-container'>
            {props.countries.map(country => {
                return (
                    <div className='country-box'>
                        <Link to={`/country/${country.alpha3Code}`}>
                            {country.name}
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default World;