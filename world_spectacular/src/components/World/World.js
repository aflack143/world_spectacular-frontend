
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
            countries: [],
            world: [],
            type: 'name',
            searchInput: null,
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
        this.setState({
            countries: this.state.countries,
            type: e.target.value,
            searchInput: this.state.searchInput,
            errorMsg: this.state.errorMsg
        })
    }

    // setCountryState = async (resp) => {
    //     await this.setState({
    //         countries: resp.data,
    //         world: this.state.world,
    //         type: this.state.type,
    //         searchInput: this.state.searchInput,
    //         errorMsg: this.state.errorMsg
    //     }, () =>{})}

    fetchData = async () => {
        await axios.get(`https://restcountries.eu/rest/v2/${this.state.type}/${this.state.searchInput}`)
        .then(resp => this.setState(prevState=>({...prevState, countries: resp.data})))
        // .then(resp => this.setCountryState(resp))
        .catch(err => this.setState(prevState=>({...prevState, errorMsg: err.message})))
        console.log(`${this.state.searchInput}`)
    }

    searchWorld = (e, props) => {
        const searchInput = e.target.value
        if(searchInput === ''){
            this.setState({
                countries: this.state.world,
                world: this.state.world,
                type: this.state.type,
                searchInput: null,
                errorMsg: this.state.errorMsg
            })
            return
            }
        // console.log(e.target.value)
        this.setState({
            countries: this.state.countries,
            world: this.state.world,
            type: this.state.type,
            searchInput: e.target.value,
            errorMsg: this.state.errorMsg
        }, () => {
        this.fetchData()})
    }

    async componentDidMount() {
        const countries = await axios('https://restcountries.eu/rest/v2/all');
        this.setState({
            countries: countries.data,
            world: countries.data,
            type: 'name',
            searchInput: null,
            errorMsg: ''
        })
    }
    render() {
        console.log(this.state.countries)
        const countries = this.state.countries
        return (
            <div id='world'>
                <h3>Countries around the WORLD</h3>
                <img src='https://geology.com/world/world-map.gif' alt='world_map' />
                <div>
                    <Search searchInput={this.state.searchInput} type={this.state.type} searchWorld={this.searchWorld} handleSearchType={this.handleSearchType}/>
                </div>
                <div className='world-container'>
                    {countries.map(country => {
                        return (
                            <p className='country-box'>
                                <Link to={`/country/${country.alpha3Code}`}>
                                    <CountryList country={country} />
                                </Link>
                            </p>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default World;