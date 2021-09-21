import React from 'react';
import "./Country.css";
const Country = (props) => {
    // console.log(props.country)
    const {flag,name,capital,population,region,timezones} = props.country;
    return (
        <div className="country-div">
            <img src={flag} alt="" />
            <h2>Country Name: {name}</h2>
            <h3>Country Capital: {capital}</h3>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Time Zone: {timezones}</p>
        </div>
    );
};

export default Country;