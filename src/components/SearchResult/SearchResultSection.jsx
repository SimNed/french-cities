import React, { useState } from "react";
import AlphabeticalNav from "./AlphabeticalNav";
import CitiesResultList from "./CitiesResultList";

const CitiesSection = ({ cities, citySelection }) => {

    const [citiesDisplayed, setCitiesDisplayed] = useState([]);

    function handleLetterSelection(letter) {
        const citiesToDisplay = cities.filter(city => city.nom.charAt(0) === letter.toUpperCase());
        setCitiesDisplayed(citiesToDisplay);
    }

    return (
        <section>
            <AlphabeticalNav cities={cities} handleLetterSelection={(letter) => handleLetterSelection(letter)} />
            <CitiesResultList citiesDisplayed={citiesDisplayed} citySelection={citySelection} />
        </section>
    );
}

export default CitiesSection;