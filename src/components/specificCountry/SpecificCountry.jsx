import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../header/Header';
import { Link, useParams } from 'react-router-dom';


export default function SpecificCountry( {dataCountries}) {



    const { countryname} = useParams()




  return (
    <>
    <Header />

    <div className='container-specific-country'>

    <Link className='links' to={'/countries-app/'} ><button className="btn-back-page"> 
    <img className='dark-mode-element' src="../assets/img/arrow-right-white.svg" alt="" />
    <img className='light-mode-element' src="../assets/img/arrow-right.svg" alt="" />
    <span>Back</span>
    </button>
    </Link>
    
    {dataCountries
    .filter((dataTest) => dataTest.name.common === countryname)
    .map((country, index) =>
    <div key={index} className="container">
        <img src={country.flags.svg} alt="" />

        <div className="presentation-country">
        <h1>{country.name.common}</h1>


        <div className="list-details">

        <ul className="list-infos list1">
            <li><strong>Population: </strong>  {country.population.toLocaleString()}</li>
            <li><strong>Region: </strong>  {country.region}</li>
            {country.subregion? <li><strong>Subregion: </strong>  {country.subregion}</li> : <li><strong>Subregion: </strong>Undefined </li> }
            {country.capital? <li><strong>Capital: </strong>{country.capital}</li> : <li><strong>Capital: </strong>Undefined </li>}
           
        </ul>

        <ul className="list-infos list2">
            <li ><strong>Top Level Domain: </strong>{country.tld[0]}</li>

            {country.currencies? <li><strong>Currencies: </strong>{ Object.values(country.currencies)[0].name}</li> : <li> <strong>Currencies:</strong>  undefined</li> }
            <li className='languages'><strong>Languages: </strong> {  Object.values(country.languages).map(countryLanguage =><span>{countryLanguage} </span> )}</li>

        </ul>
        </div>
<div className="border-country-div">
        <h4>Border countries:</h4>
        <ul className='list-borders'>
        {country.borders? country.borders.map(bordersCountry => <span className='border' >{bordersCountry}</span>) : <span className='border'>Undefined</span> }
            </ul>
            </div>
        </div>
        </div>
    )}</div>
    
    </>
  )
}
