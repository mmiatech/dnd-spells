import { useState } from "react";
import axios from "axios";

const baseUrl = 'https://www.dnd5eapi.co/api';

const useSpellName = () => {
    // console.log('use spell name hook');
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [spellInfo, setSpellInfo] = useState(null);

    const submitRequest = async (spellName) => {
        // console.log({ spellName });
        const response = await axios(`${baseUrl}/spells`, {params: {name: spellName}});
        console.log({response});
    }

    return {
        isError
        , isLoading
        , spellInfo
        , submitRequest
    }
  }

export default useSpellName;