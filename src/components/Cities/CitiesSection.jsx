import React, { useState } from "react";
import AlphabeticalNav from "./AlphabeticalNav";
import CitiesResultList from "./CitiesResultList";

const CitiesSection = ({ cities, citySelection }) => {

    const [citiesDisplayed, setCitiesDisplayed] = useState([]);
    
    function handleLetterSelection(letter){
        const citiesToDisplay = cities.filter(city => city.nom.charAt(0) === letter.toUpperCase());
        setCitiesDisplayed(citiesToDisplay);
    }

    return(
        <section className="result-section">
            <AlphabeticalNav cities={cities} handleLetterSelection={(letter) => handleLetterSelection(letter)}></AlphabeticalNav>
            <CitiesResultList citiesDisplayed={citiesDisplayed} citySelection={citySelection}></CitiesResultList>
        </section>
    );
}

export default CitiesSection;