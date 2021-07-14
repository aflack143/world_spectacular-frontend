
import './CountryList.css';
import React from 'react';

const CountryList = (props) => {

  return (
    <div id='country-list'>
        {props.country.name} ({props.country.alpha3Code})
        {/* {onHover && */}
          <div>
          {props.country.altSpellings.map(altname => {
            if (altname !== ''){
            return <li>{altname}</li>
          }
          })} 
          </div>
        {/* }  */}
    </div>
  );
}

export default CountryList;