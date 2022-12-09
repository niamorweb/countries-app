import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function CardCountries( { country}) {

   



  return (
    <Link className='links' to={'/countries-app/country/' + country.name.common}>
     <div className="card">
        <img src={country.flags.svg} alt="" />
        <div className="infos">
            <h2>{country.name.common}</h2>
            <ul className='details-card-list'>
              <li><b>Population: </b>{country.population.toLocaleString()} </li>
              <li><b>Region: </b>{country.continents} </li>
              <li><b>Capital: </b>{country.capital} </li>
            </ul>
            
        </div>
    </div>
     </Link>
    
  )
}
