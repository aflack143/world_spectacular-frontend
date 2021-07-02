import './Country.css';
import React, { useState } from 'react';

const Country = (props) => {
  return (
    <div>
      <h3>Country</h3>
      <h4>{props.country.name} ({props.country.alpha3Code})</h4>
      {/* <img src={`https://geology.com/world/${props.country.name}-map.gif`} alt='map'/> */}
      <img src={props.country.flag} alt='flag'/>
      <p>Capital: {props.country.capital}</p>
      <p>Currency: {props.country.currencies.map(currency => {
        return (`${currency.symbol} = ${currency.code} (${currency.name})`)
      })}</p>
      <p>Language(s): {props.country.languages.map(language => {
        return (`${language.name}`)
      })}</p>
      <p>Population: {props.country.population}</p>
      <p>Bordering Countries:{props.country.borders.map(border => {
        return <li>{border}</li> })}</p>
    </div>
  );
}

export default Country;