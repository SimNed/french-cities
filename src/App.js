import React, { useState, useEffect } from 'react';

import SearchForm from './components/Search/SearchSection';
import CitiesSection from './components/Cities/CitiesSection';
import CityDetails from './components/Details/CityDetails';

import './App.css';

function App() {
  
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState({});

  function handleCitiesSearchResult(result){
    setCities(result);
  }

  return(
    <div>
      <h1>Villes Françaises</h1>
      <SearchForm handleSearchResult={(result) => handleCitiesSearchResult(result)}></SearchForm>
      <main>
        <CitiesSection cities={cities} citySelection={setSelectedCity}></CitiesSection>
        <CityDetails selectedCity={selectedCity}></CityDetails>      
      </main>
      
    </div>
  )
}

export default App;
