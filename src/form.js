import React, {useState} from "react";

const Form = ({submitSearch}) => {
    const [spellName, setSpellName] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (!spellName || spellName === '') return;
        // console.log({spellName});
        submitSearch(spellName);
    }

    return (
        <form>
            <input
                type="text"
                placeholder="Search for a spell!"
                required
                value={spellName}
                onChange={e => setSpellName(e.target.value)}
            />

            <button
                type="submit"
                onClick={onSubmit}
            >
                Search
            </button>
        </form>
    );
  }

export default Form;