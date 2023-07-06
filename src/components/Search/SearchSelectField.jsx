import React from "react";

const SearchSelectField = ({ name, options, defaultOptionText, onChange }) => {

    const optionsInJsx = options.map((option) =>
        <option value={option.code} key={option.code}>{option.nom}</option>
    );

    return (
        <select name={name} onChange={(e) => onChange(e.target.value)}>
            <option value="">{defaultOptionText}</option>
            {optionsInJsx}
        </select>
    );
}

export default SearchSelectField;