import React, { useState, useEffect } from "react";
import AlphabeticalNav from "./AlphabeticalNav";
import CitiesResultList from "./CitiesResultList";

const CitiesSection = ({ cities }) => {

    const [citiesDisplayed, setCitiesDisplayed] = useState([]);
    
    function handleLetterSelection(letter){
        const citiesToDisplay = cities.filter(city => city.nom.charAt(0) === letter.toUpperCase());
        setCitiesDisplayed(citiesToDisplay);
    }

    // A faire
    // function handleCitySelection(cityToDisplay){
    //     const cityDetailsToDisplay = cities.filter(city => city.nom === cityToDisplay.nom);
    //     setCitiesDisplayed([...citiesToDisplay]);
    // }

    return(
        <section>
            <AlphabeticalNav cities={cities} handleLetterSelection={(letter) => handleLetterSelection(letter)}></AlphabeticalNav>
            <CitiesResultList citiesDisplayed={citiesDisplayed}></CitiesResultList>
        </section>
    );
}

export default CitiesSection;