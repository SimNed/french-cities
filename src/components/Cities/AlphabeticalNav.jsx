import { useState, useEffect } from "react";

const AlphabeticalNav = ({ cities, handleLetterSelection }) => {

    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    const [activeLetters, setActiveLetters] = useState([]);

    useEffect(() => {

        const currentActiveLetters = alphabet.filter(letter =>
            cities.some(city => city.nom.startsWith(letter.toUpperCase()))
        );

        setActiveLetters(currentActiveLetters);
        handleLetterSelection(currentActiveLetters[0]);
    }, [cities])

    return <ul className="alphabetical-nav">
        {alphabet.map((letter) => {
            if(activeLetters.some(activeLetter => letter === activeLetter))
                return <li className="active-letter" key={letter} onClick={() => handleLetterSelection(letter)}>{letter}</li>
            else
                return <li className="unactive-letter" key={letter}>{letter}</li>
        })}
    </ul>
}

export default AlphabeticalNav;