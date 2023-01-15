import React, { useEffect, useState}  from 'react'
import DarkLightMode from '../darkLightMode/DarkLightMode'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header>
      <div className="container-header">
       <Link className='links' to={'/countries-app/'}> <h2>Where in the world ?</h2></Link>
        <DarkLightMode />
        </div>
    </header>
  )
}
