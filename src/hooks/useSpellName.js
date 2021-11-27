import { useState } from "react";
import axios from "axios";

const baseUrl = 'https://www.dnd5eapi.co';

const useSpellName = () => {
    // console.log('use spell name hook');
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [spellInfo, setSpellInfo] = useState(null);

    const submitRequest = async (spellName) => {
        setLoading(true);
        setError(false);

        spellName = spellName.replaceAll(' ', '-');
        spellName = spellName.replaceAll("'", '');
        // console.log({ spellName });

        try {
            const { data } = await axios(`${baseUrl}/api/spells/${spellName}`);
            //console.log(data);
            setSpellInfo({ data });
        } catch (err) {
            setError(spellName);
            setLoading(false);
            return;
        }
    }

    return {
        isError
        , isLoading
        , spellInfo
        , submitRequest
    }
  }

export default useSpellName;