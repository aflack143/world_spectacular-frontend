'world/photos/'

// import './Nav.css';
import React from 'react';

const PictureDisplay = (props) => {

    fetchData = async (abbr) => {
        const country_api = await axios(`http://localhost:8000/country/${this.props.match.params.abbr}`)
        console.log(country_api)
        
        this.setState({
            country: country.data,
            currencies: country.data.currencies,
            languages: country.data.languages,
            borders: country.data.borders,
            anthem: anthem,
            pictures: []
        })
    }

    return (
        <div>

        </div>
    );
}

export default PictureDisplay;