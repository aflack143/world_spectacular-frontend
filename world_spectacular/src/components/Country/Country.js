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
      // anthem: '',
      // play: false
    }
  }

  // audio = 'https://upload.wikimedia.org/wikipedia/commons/5/5e/%22The_Star-Spangled_Banner%22_-_Choral_with_band_accompaniment_-_United_States_Army_Field_Band.oga'


  async componentDidMount(abbr) {
    const country = await axios(`https://restcountries.eu/rest/v2/alpha/${this.props.match.params.abbr}`)
    console.log(country.data)
    const anthem = 'https://upload.wikimedia.org/wikipedia/commons/5/5e/%22The_Star-Spangled_Banner%22_-_Choral_with_band_accompaniment_-_United_States_Army_Field_Band.oga'
    
    this.setState({
      country: country.data,
      currencies: country.data.currencies,
      languages: country.data.languages,
      borders: country.data.borders,
      anthem: anthem,
      // play: false
    })
//    this.state.anthem.addEventListener('ended', () => this.setState({  ...this.state, play: false }));
  }
  // componentWillUnmount() {
  //   this.state.anthem.removeEventListener('ended', () => this.setState({ ...this.state, play: false }));  
  // }
// toggleplay = () => {
//   console.log('sound init')
//   this.setState({ ...this.state, play: !this.state.play }, () => {
//     this.state.play ? this.state.anthem.play() : this.state.anthem.pause()
//   })
// }
  render() {
    const country = this.state.country
    const anthem = this.state.anthem
    console.log(anthem)
    return (
      <div>
        <h3>Country</h3>
        <ReactAudioPlayer
          src={this.state.anthem}
          // autoPlay
          controls
        />
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
          return <li>
            {/* <Link to={`/country/${border}`}> */}
              {border}
              {/* </Link> */}
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