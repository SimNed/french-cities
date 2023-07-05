import { useState, useEffect, useRef } from "react";
import axios from "axios";

import SearchSelectField from "./SearchSelectField";

const SearchSection = ({ handleSearchResult }) => {

    const baseUrl = 'https://geo.api.gouv.fr';

    const [regionOptions, setRegionOptions] = useState([]);
    const [departmentOptions, setDepartmentOptions] = useState([]);

    const [selectedRegionCode, setSelectedRegionCode] = useState("");
    const [selectedDepartmentCode, setSelectedDepartmentCode] = useState("");

    const flag = useRef(false); //PREVENT TWICE USE EFFECT CALL IN DEV MODE

    useEffect(() => {
        if(flag.current === false) {
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
        if(selectedRegionCode !== ""){
            axios.get(baseUrl + '/regions/' + selectedRegionCode + '/departements').then((response) => {     
                setDepartmentOptions([...response.data]);
            });
        }
    }, [selectedRegionCode]);

    function handleRegionSelection(regionCode){
        setSelectedRegionCode(regionCode)
    }

    function handleDepartmentSelection(departmentCode){
        setSelectedDepartmentCode(departmentCode)
    }

    function handleSubmit(){
        if(selectedDepartmentCode !== ""){
            axios.get(baseUrl + '/departements/' + selectedDepartmentCode + '/communes').then((response) => {     
                handleSearchResult(response.data)
            });
        }
    }

    return(
        <section>
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