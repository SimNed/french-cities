import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import SearchSelectField from "./SearchSelectField";

const SearchForm = () => {

    const [regions, setRegions] = useState([]);
    const [departments, setDepartments] = useState([]);

    const [selectedRegionCode, setSelectedRegionCode] = useState("");
    const [selectedDepartmentCode, setSelectedDepartmentCode] = useState("");

    //PREVENT TWICE USE EFFECT CALL IN DEV MODE
    const flag = useRef(false);

    useEffect(() => {
        if(flag.current === false) {
            axios.get('https://geo.api.gouv.fr/regions').then((response) => {     
                setRegions([...response.data]);
                console.log(response.data)
            });

            axios.get('https://geo.api.gouv.fr/departements').then((response) => {     
                setDepartments([...response.data]);
            });
        }

        return () => flag.current = true;
    }, []);

    useEffect(() => {
        if(selectedRegionCode !== ""){
            axios.get('https://geo.api.gouv.fr/regions/' + selectedRegionCode + '/departements').then((response) => {     
                setDepartments([...response.data]);
            });
        }
    }, [selectedRegionCode]);

    function handleRegionSelection(regionCode){
        setSelectedRegionCode(regionCode)
    }

    function handleDepartmentSelection(departmentCode){
        setSelectedDepartmentCode(departmentCode)
    }

    return(
        <form type="submit">
            <SearchSelectField 
                name="regions" 
                options={regions} 
                defaultOptionText="Toutes les régions" 
                onChange={(region) => handleRegionSelection(region)}
            >
            </SearchSelectField>
            <SearchSelectField 
                name="department" 
                options={departments} 
                defaultOptionText="Tous les départements"
                onChange={(department) => handleDepartmentSelection(department)}
            >
            </SearchSelectField>
        </form>
    )
}

export default SearchForm;