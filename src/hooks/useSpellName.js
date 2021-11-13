import { useState } from "react";

const useSpellName = () => {
    // console.log('use spell name hook');
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isSpellInfo, setSpellInfo] = useState(null);

    return {
        isError, isLoading, isSpellInfo
    }
  }

export default useSpellName;