
import './CountryList.css';
import React, { useState } from 'react';

const CountryList = (props) => {

  const [displayAltName, setDisplayAltName] = useState(false)

  const handleDisplayAltNameShow = () => {
    setDisplayAltName(true)
  }
  const handleDisplayAltNameHide = () => {
    setDisplayAltName(false)
  }

  return (
    <div id='country-list'>
        <p title={() => {props.country.altSpellings.map(altname => {
            if (altname !== ''){
            return <li>{altname}</li>
          }

          })}}onMouseEnter={handleDisplayAltNameShow} onMouseOut={handleDisplayAltNameHide}>{props.country.name} ({props.country.alpha3Code})</p>
          {displayAltName &&
          <div>
          {props.country.altSpellings.map(altname => {
            if (altname !== ''){
            return <p className='alt'> - {altname}</p>
          }
          })} 
          </div>
          } 
    </div>
  );
}

export default CountryList;