import { useState, useEffect } from "react";

const CitiesResultList = ({ citiesDisplayed }) => {
    
    const [citiesInJsx, setCitiesInJsx] = useState();

    useEffect(() => {
        const jsx = citiesDisplayed.map(city => <li key={city.nom}>{city.nom}</li>);

        console.log(jsx)

        setCitiesInJsx([...jsx]);
    }, [citiesDisplayed])

    return <ul>{ citiesInJsx }</ul>
} 

export default CitiesResultList;