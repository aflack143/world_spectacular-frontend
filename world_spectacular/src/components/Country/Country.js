import './Country.css';
import React, { Component } from 'react';
import axios from 'axios';

class Country extends Component {
  constructor(props){
    super(props)
    this.state = {
      country: [],
      currencies: [],
      languages: [],
      borders: [],
    }
  }

  async componentDidMount(abbr) {
    const country = await axios(`https://restcountries.eu/rest/v2/alpha/${this.props.match.params.abbr}`)
    console.log(country.data)
    this.setState({
      country: country.data,
      currencies: country.data.currencies,
      languages: country.data.languages,
      borders: country.data.borders,
    })
  }
  render() {
    const country = this.state.country
    return (
      <div>
        <h3>Country</h3>
        <h4>{country.name} ({country.alpha3Code})</h4>
        <img src={country.flag} alt='flag'/>
        <div>
        <p>Capital: {country.capital}</p>
        <p>Currency: {this.state.currencies.map(currency => {
          return (`${currency.symbol} = ${currency.code} (${currency.name})`)
        })}</p>
        <p>Language(s): {this.state.languages.map(language => {
          return (`${language.name}`)
        })}</p>
        <p>Population: {parseInt(country.population).toLocaleString()}</p>
        <p>Bordering Countries:</p>
        {this.state.borders && this.state.borders.map(border => {
          return <li>{border}</li> })}
                    
        </div>
        <div>
          {/* <a href={`https://kids.nationalgeographic.com/geography/countries/article/${country.name.toLowerCase()}`}/> */}
        </div>
      </div>
    );
  }
}

export default Country;