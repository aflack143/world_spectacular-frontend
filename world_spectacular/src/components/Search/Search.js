import './Search.css';
import React, { Component } from 'react';

const Search = (props) => {
   
    return (
        <div id='search'>
            <div>
                <fieldset onChange={props.searchWorld}>
                    <label for='name'><input className="search-input" type='search' name='name' placeholder='Search here' required /></label>
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