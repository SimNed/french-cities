import React, { useState, useEffect } from 'react';

import SearchSection from './components/Search/SearchSection';
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
      <main>
        <aside>
          <SearchSection handleSearchResult={(result) => handleCitiesSearchResult(result)}></SearchSection>
          <CitiesSection cities={cities} citySelection={setSelectedCity}></CitiesSection>
        </aside>
        <section className='main-section'>
          <h1>Villes Françaises</h1>
          <CityDetails selectedCity={selectedCity}></CityDetails>      
        </section>
      </main>
  )
}

export default App;
