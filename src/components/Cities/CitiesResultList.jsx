const CitiesResultList = ({ citiesDisplayed, citySelection }) => {
    
    function handleCitySelection(cityName){
        const cityToSelect = citiesDisplayed.find(city => city.nom === cityName)
        citySelection(cityToSelect)
    }

    return <ul className="result-section">{citiesDisplayed.map(city => 
            <li key={city.nom} onClick={() => handleCitySelection(city.nom)}>{city.nom}</li>
        )}
    </ul>
} 

export default CitiesResultList;