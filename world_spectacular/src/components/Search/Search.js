import './Search.css';
import React, { Component } from 'react';

const Search = (props) => {
let regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    return (
        <div id='search'>
            <div>
                {props.type !== 'region' ?
                    <fieldset onChange={props.searchWorld}>
                        <label for='name'><input className="search-input" type='search' name='name' placeholder='Search here' required /></label>
                    </fieldset>
                :
                    <fieldset onChange={props.searchWorld}>
                        <select value={props.type} name="name" type="dropdown">
                            <option value="⬇️ Select a Region ⬇️"> -- Select a Region -- </option>
                            {regions.map(region => 
                            <option value={region}>{region}</option>
                            )}
                        </select>
                    </fieldset> 
                } 
                <fieldset className="search-type" onChange={props.handleSearchType}>
                <label className='radiobtn' for='name'><input className='radiobtn' type='radio' name='name' value='name' checked={props.type === 'name'}/>Name</label>
                <label className='radiobtn' for='lang'> <input className='radiobtn' type='radio' name='lang' value='lang' checked={props.type === 'lang'}/>Language</label>
                <label className='radiobtn' for='region'> <input className='radiobtn' type='radio' name='region' value='region' checked={props.type === 'region'}/>Region</label>
              </fieldset>
            </div>
        </div>
    );
}

export default Search;