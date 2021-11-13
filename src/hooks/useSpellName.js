import { useState } from "react";

const useSpellName = () => {
    // console.log('use spell name hook');
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [spellInfo, setSpellInfo] = useState(null);

    const submitRequest = (spellName) => {
        console.log({ spellName });
    }

    return {
        isError
        , isLoading
        , spellInfo
        , submitRequest
    }
  }

export default useSpellName;