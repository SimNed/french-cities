import { useState } from "react";

const AutoCompleteInput = ({ options, onChange }) => {

    const [showOptions, setShowOptions] = useState(false);

    return(
        <div className="autocomplete-input-container">
            <input
                placeholder="entre une ville"
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setShowOptions(true)}
                onBlur={() => setShowOptions(false)}
            />
            {showOptions &&(
                <ul className="autocomplete-options-container">{
                    options.map(option =>
                         <li key={option.nom + option.code}>{option.nom} ({option.departement.code})</li>
                    )
                }</ul>
            )}
        </div>
    )
}

export default AutoCompleteInput;