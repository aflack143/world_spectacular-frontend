
import './CountryList.css';
import React from 'react';
import { Link } from 'react-router-dom';

const CountryList = (props) => {

  return (
    <div id='country-list'>
        {props.country.name} ({props.country.alpha3Code})
    </div>
  );
}

export default CountryList;