import { useState, useEffect } from "react";

const CitiesResultList = ({ citiesDisplayed, handleCitySelection }) => {
    
    const [citiesInJsx, setCitiesInJsx] = useState();

    useEffect(() => {
        const jsx = citiesDisplayed.map(city => 
            <li key={city.nom} onClick={(e) => handleCitySelection(e.target.value)}>{city.nom}</li>
        );

        setCitiesInJsx([...jsx]);
    }, [citiesDisplayed])

    return <ul>{ citiesInJsx }</ul>
} 

export default CitiesResultList;