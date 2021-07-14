
import './CountryList.css';
import React from 'react';

const CountryList = (props) => {

  return (
    <div id='country-list'>
        <p title={() => {props.country.altSpellings.map(altname => {
            if (altname !== ''){
            return <li>{altname}</li>
          }
          })}}>{props.country.name} ({props.country.alpha3Code})</p>
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