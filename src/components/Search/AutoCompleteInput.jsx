import { useState } from "react";

const AutoCompleteInput = ({ placeholder, options, onChange, onOptionClick }) => {

    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className="autocomplete-input-container">
            <input
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setShowOptions(true)}
                onBlur={() => setShowOptions(false)}
            />
            {showOptions && (<ul className={"autocomplete-options-container"}>{
                options.map(option =>
                    <li key={option.nom + option.code} onMouseDown={() => onOptionClick(option.nom)}>{option.nom} ({option.departement.code})</li>
                )
            }</ul>)
            }


        </div>
    )
}

export default AutoCompleteInput;