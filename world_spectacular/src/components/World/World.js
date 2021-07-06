
import './World.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CountryList from '../CountryList/CountryList';
import Search from '../Search/Search';
import axios from 'axios';

class World extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: props.countries,
            // world: props.countries,
            type: 'name',
            searchInput: '',
            errorMsg: ''
        }
    }

    sortedCountries = () => {
        this.state.countries.sort((a,b) => {
            let nameA = a.name.replace(/\b(\w)/g, s => s.toUpperCase());
            let nameB = b.name.replace(/\b(\w)/g, s => s.toUpperCase());
            if (a.name === 'Åland Islands') {
                a.name = 'Aland Islands';
                if (nameA < nameB) {
                    a.name = 'Åland Islands'
                    return -1;
                } if (nameA > nameB) {
                    a.name = 'Åland Islands'
                    return 1;
                } return 0;
            } else if (b.name === 'Åland Islands') {
                b.name = 'Aland Islands';
                if (nameA < nameB) {
                    b.name = 'Åland Islands'
                    return -1;
                } if (nameA > nameB) {
                    b.name = 'Åland Islands'
                    return 1;
                } return 0;
            } else {
                if (nameA < nameB) {
                    return -1;
                } if (nameA > nameB) {
                    return 1;
                } return 0;
            }
        })
    }

    handleSearchType = (e) => {
        // e.preventDefault()
        this.setState(prevState=>({...prevState,
            type: e.target.value
        }))
        // this.searchWorld(e.target.value)
    }

    setCountryState = (resp) => {
        this.setState({
            countries: resp.data,
            // world: this.state.world,
            type: this.state.type,
            searchInput: this.state.searchInput,
            errorMsg: this.state.errorMsg
        }, () =>{})}

    fetchData = async (e) => {
        if (this.state.searchInput !== '' && this.state.type === 'name') {
        // const countries = 
        await axios.get(`https://restcountries.eu/rest/v2/${this.state.type}/${this.state.searchInput}`)
        .then(resp => this.setCountryState(resp))
        .catch(err => this.setState(prevState=>({...prevState, errorMsg: err.message})))
        // const countries = resp
        // this.setCountryState(countries)
        } else {
        //     // e.persist()
        // if (this.state.searchInput !== ''){
        await axios.get(`https://restcountries.eu/rest/v2/all`)
        .then(resp => this.setCountryState(resp))
        .catch(err => this.setState(prevState=>({...prevState, errorMsg: err.message})))
            // this.setState({
            //     countries: this.state.world,
            //     world: this.state.world,
            //     type: this.state.type,
            //     searchInput: this.state.searchInput
            // })}
            // this.setCountryState(countries)
            // console.log(this.state.countries)
        // }
    }
    }

    // searchWorld = async (type, input) => {
        // const countries = await axios(`https://restcountries.eu/rest/v2/${type}/${input}`);
    searchWorld = (e) => {
        // e.preventDefault()
        const searchInput = e.target.value
        console.log(e.target.value)
        this.setState({
            countries: this.state.countries,
            type: this.state.type,
            searchInput: e.target.value
        }, () =>{})
        this.fetchData()
    }

    // componentDidMount = (props) => {
    //     this.setState(prevState=>({...prevState,
    //         countries: this.allCountries()
    //         }))
    // }
    render() {
        console.log(this.state.countries)
        const countries = this.state.countries
        return (
            <div id='world'>
                <h3>Countries around the WORLD</h3>
                <img src='https://geology.com/world/world-map.gif' alt='world_map' />
                <div>
                    <Search type={this.state.type} searchWorld={this.searchWorld} handleSearchType={this.handleSearchType}/>
                </div>
                <div className='world-container'>
                    {countries.map(country => {
                        return (
                            <li className='country-box'>
                                <Link to={`/country/${country.alpha3Code}`}>
                                    <CountryList country={country} />
                                </Link>
                            </li>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default World;