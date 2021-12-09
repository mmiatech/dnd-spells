import { useState } from "react";
import axios from "axios";

const baseUrl = 'https://www.dnd5eapi.co';

// hook to call the api
const useSpellName = () => {
    // initialize component displays
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [spellInfo, setSpellInfo] = useState(null);

    // submit the search
    const submitRequest = async (spellName) => {
        setLoading(true);
        setError(false);

        // clean user input
        spellName = spellName.replaceAll(' ', '-');
        spellName = spellName.replaceAll("'", '');

        // call the api
        try {
            const {data} = await axios(`${baseUrl}/api/spells/${spellName}`);
            setSpellInfo({data});
        } catch (err) {
            spellName = spellName.replaceAll('-', ' ');
            setError(spellName);
            setLoading(false);
            return;
        }
    }

    // pass component states and search results
    return {
        isError
        , isLoading
        , spellInfo
        , submitRequest
    }
  }

export default useSpellName;