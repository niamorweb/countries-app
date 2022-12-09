import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home/Home';
import SpecificCountry from './components/specificCountry/SpecificCountry';
import { useEffect, useState } from 'react';
import PageNotFound from './components/pageNotFound/PageNotFound';
import axios from 'axios';
import './styles/index.css'



function App() {

  const [linkCountry, setLinkCountry] = useState("")
  const [dataCountries, setDataCountries] = useState([])
  
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setDataCountries(res.data));
  }, []);

  

  return (
    <>
    <BrowserRouter>
    <Routes>
        
      
      <Route path='/' 
      element={<Home dataCountries={dataCountries}/>}/>
      
      <Route path='/country/:countryname' 
      element={<SpecificCountry dataCountries={dataCountries} />}/>

    <Route path='/*' />
    </Routes>
    
    </BrowserRouter> 
    
    
    </>
  );
}

export default App;
