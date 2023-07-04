import { useEffect } from "react";

const AlphabeticalNav = ({ cities, handleLetterSelection }) => {

    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    const alphabetInJsx = alphabet.map(letter => 
        <li key={letter} onClick={() => handleLetterSelection(letter)}>{letter}</li>
    );

    useEffect(() => {
        handleLetterSelection(alphabet[0]);
    }, [cities])

    return <ul>{alphabetInJsx}</ul>
}

export default AlphabeticalNav;