import './Country.css';
import React, { Component } from 'react';
import axios from 'axios';
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';

class Country extends Component {
  constructor(props){
    super(props)
    this.state = {
      country: [],
      currencies: [],
      languages: [],
      borders: [],
      anthem: '',
    }
  }

  fetchData = async (abbr) => {
    const country = await axios(`https://restcountries.eu/rest/v2/alpha/${this.props.match.params.abbr}`)
    console.log(country)
    const anthem = 'https://upload.wikimedia.org/wikipedia/commons/5/5e/%22The_Star-Spangled_Banner%22_-_Choral_with_band_accompaniment_-_United_States_Army_Field_Band.oga'
    
    this.setState({
      country: country.data,
      currencies: country.data.currencies,
      languages: country.data.languages,
      borders: country.data.borders,
      anthem: anthem,
    })
  }

  async componentDidMount(abbr) {
    this.fetchData(this.props.match.params.abbr)
  }

  componentDidUpdate(prevProps){
    if(this.props.match.params.abbr !== prevProps.match.params.abbr){this.fetchData()}
  }
  
  render() {
    const country = this.state.country
    const anthem = this.state.anthem
    console.log(anthem)
    return (
      <div background-image='url{country.flag}'>
        {/* <h2>Country</h2> */}
        <h2>{country.name} ({country.alpha3Code})</h2>
        <img className='flag' src={country.flag} alt='flag'/>
        <ReactAudioPlayer
          src={this.state.anthem}
          // autoPlay
          controls
        />
        <div>
        <p>Capital: {country.capital}</p>
        <p>Currency: {this.state.currencies.map(currency => {
          return (`${currency.symbol} = ${currency.code} (${currency.name})`)
        })}</p>
        <p>Language(s): {this.state.languages.map(language => {
          return (`${language.name}  `)
        })}</p>
        <p>Population: {parseInt(country.population).toLocaleString()}</p>
        <p>Bordering Countries:</p>
        {this.state.borders && this.state.borders.map(border => {
          return <li>
            <Link to={`/country/${border}`}>
              {border}
              </Link>
              </li> })}
                    
        </div>
        <div>
          {/* <a href={`https://kids.nationalgeographic.com/geography/countries/article/${country.name.toLowerCase()}`}/> */}
        </div>
      </div>
    );
  }
}

export default Country;