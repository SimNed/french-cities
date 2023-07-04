import React, { useState, useEffect } from "react";
import AlphabeticalNav from "./AlphabeticalNav";
import CitiesResultList from "./CitiesResultList";

const CitiesSection = ({ cities }) => {

    const [citiesDisplayed, setCitiesDisplayed] = useState([]);
    // const [alphabetIndex, setAlphabetIndex] = useState("a");

    // useEffect(() => {
        
    //     console.log(citiesToDisplay)
    // }, [alphabetIndex])
    
    function handleLetterSelection(letter){
        const citiesToDisplay = cities.filter(city => city.nom.charAt(0) === letter.toUpperCase());
        setCitiesDisplayed([...citiesToDisplay]);
    }

    return(
        <section>
            <AlphabeticalNav cities={cities} handleLetterSelection={(letter) => handleLetterSelection(letter)}></AlphabeticalNav>
            <CitiesResultList citiesDisplayed={citiesDisplayed}></CitiesResultList>
        </section>
    );
}

export default CitiesSection;