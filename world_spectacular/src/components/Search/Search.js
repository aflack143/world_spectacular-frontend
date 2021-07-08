import './Search.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Search = (props) => {

    // async componentDidMount(abbr) {
        /* link for 242 country coordinates */
    //     const geo = await axios('http://makc.github.io/three.js/map2globe/globe_hi.geojson');
    //     console.log(geo.data.features)
    // }
    
    return (
        <div id='search'>
            <div>
                <fieldset className="search-input" onChange={props.searchWorld}>
                    <label for='name'><input type='search' name='name' placeholder='Search here' required /></label>
                </fieldset>
                <fieldset className="search-type" onChange={props.handleSearchType}>
                <label className='radiobtn' for='name'><input className='radiobtn' type='radio' name='name' value='name' checked={props.type === 'name'}/>Name</label>
                {/* <label className='radiobtn' for='alpha'> <input className='radiobtn' type='radio' name='alpha' value='alpha' checked={props.type === 'alpha'}/>Country Code(abbr.)</label> */}
              </fieldset>
            </div>
        </div>
    );
}

export default Search;