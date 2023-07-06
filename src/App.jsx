import React, { useState, useEffect } from 'react';

import SearchSection from './components/Search/SearchSection';
import SearchResultSection from './components/SearchResult/SearchResultSection';
import CityDetails from './components/Details/CityDetails';

import './App.css';

function App() {

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState({});

  function handleCitiesSearchResult(result) {
    setCities(result);
  }

  return (
    <main>
      <aside>
        <SearchSection handleSearchResult={(result) => handleCitiesSearchResult(result)} citySelection={setSelectedCity} />
        <SearchResultSection cities={cities} citySelection={setSelectedCity} />
      </aside>
      <section className='main-section'>
        <h1>Villes Françaises</h1>
        <CityDetails selectedCity={selectedCity} />
      </section>
    </main>
  )
}

export default App;

// Axes d'améliorations:
// !! Améliorer les requêtes api via axios (utiliser des paramètres de requetes, ajouter un try, catch et finally).
// !! Réinitialiser la valeur par défault des départements lorsque l'option "Toutes les régions" à été resélectionné.
// !! Factorisation du CSS
// !! Réinitialiser la valeur par défault des champs de recherches lors de la soumission d'une requête et de la sélection d'une ville.

// Ajouter la fonction de sélection de villes par nombres d'habitants
// Ajouter la fonction de sélection de villes par superficie
