import { useState } from 'react';

import SearchForm from './components/Search/SearchSection';
import CitiesSection from './components/Cities/CitiesSection';
import CityDetails from './components/Details/CityDetails';

import './App.css';

function App() {

  const [cities, setCities] = useState([]);

  function handleCitiesSearchResult(result){
    setCities(result);
  }

  return(
    <main>
      <h1>Villes Françaises</h1>
      <SearchForm handleSearchResult={(result) => handleCitiesSearchResult(result)}></SearchForm>
      <CitiesSection cities={cities}></CitiesSection>
      <CityDetails cities={cities}></CityDetails>
    </main>
  )
}

export default App;
