import { useState } from 'react';

import SearchForm from './components/SearchSection';
import CitiesSection from './components/CitiesSection';

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
    </main>
  )
}

export default App;
