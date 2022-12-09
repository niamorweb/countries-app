import React from 'react'
import Countries from '../countries/Countries'
import Header from '../header/Header'


export default function Home({ dataCountries}) {
  return (
    <>
    <Header/>
    <Countries dataCountries={dataCountries} />
    </>
  )
}
