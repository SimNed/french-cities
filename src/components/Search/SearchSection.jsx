import { useState, useEffect, useRef } from "react";
import axios from "axios";

import SearchSelectField from "./SearchSelectField";
import AutoCompleteInput from "./AutoCompleteInput";

const SearchSection = ({ handleSearchResult, citySelection }) => {

    const baseUrl = 'https://geo.api.gouv.fr';

    const [autoCompleteOptions, setAutoCompleteOptions] = useState([]);
    const [regionOptions, setRegionOptions] = useState([]);
    const [departmentOptions, setDepartmentOptions] = useState([]);

    const [autoCompleteInputValue, setAutoCompleteInputValue] = useState("");
    const [selectedRegionCode, setSelectedRegionCode] = useState("");
    const [selectedDepartmentCode, setSelectedDepartmentCode] = useState("");

    const flag = useRef(false); //PREVENT TWICE USE EFFECT CALL IN DEV MODE

    useEffect(() => {
        if (flag.current === false) {
            axios.get(baseUrl + '/regions').then((response) => {
                setRegionOptions([...response.data]);
            });

            axios.get(baseUrl + '/departements').then((response) => {
                setDepartmentOptions([...response.data]);
            });
        }
        return () => flag.current = true;
    }, []);

    useEffect(() => {
        if (autoCompleteInputValue !== "") {
            axios.get(baseUrl + '/communes?nom=' + autoCompleteInputValue + '&fields=code,nom,departement,region,surface,population,mairie&boost=population&limit=5').then((response) => {
                setAutoCompleteOptions([...response.data]);
            });
        }
    }, [autoCompleteInputValue]);

    useEffect(() => {
        if (selectedRegionCode !== "") {
            axios.get(baseUrl + '/regions/' + selectedRegionCode + '/departements').then((response) => {
                setDepartmentOptions([...response.data]);
            });
        }
    }, [selectedRegionCode]);

    function handleAutoCompleteInput(value) {
        setAutoCompleteInputValue(value)
    }

    function handleOptionSelection(cityName) {
        console.log(cityName)
        const cityToSelect = autoCompleteOptions.find(city => city.nom === cityName)
        citySelection(cityToSelect)
    }

    function handleRegionSelection(regionCode) {
        setSelectedRegionCode(regionCode)
    }

    function handleDepartmentSelection(departmentCode) {
        setSelectedDepartmentCode(departmentCode)
    }

    function handleSubmit() {
        if (selectedDepartmentCode !== "") {
            axios.get(baseUrl + '/departements/' + selectedDepartmentCode + '/communes?fields=code,nom,departement,region,surface,population,mairie').then((response) => {
                handleSearchResult(response.data)
            });
        }
    }

    return (
        <section className="search-section">
            <AutoCompleteInput
                placeholder="entrer une ville"
                options={autoCompleteOptions}
                onChange={(value) => handleAutoCompleteInput(value)}
                onOptionClick={(option) => handleOptionSelection(option)}
            ></AutoCompleteInput>
            <SearchSelectField
                name="regions"
                options={regionOptions}
                defaultOptionText="Toutes les régions"
                onChange={(region) => handleRegionSelection(region)}
            >
            </SearchSelectField>
            <SearchSelectField
                name="department"
                options={departmentOptions}
                defaultOptionText="Tous les départements"
                onChange={(department) => handleDepartmentSelection(department)}
            >
            </SearchSelectField>
            <button onClick={handleSubmit}>Rechercher</button>
        </section>
    )
}

export default SearchSection;