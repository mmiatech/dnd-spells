import React from "react";
import PropTypes from "prop-types";

const SpellInfo = ({spellInfo}) => {
    console.log({spellInfo});
    console.log(spellInfo.data);
    console.log(spellInfo.data.name);
    return (
        <div>
            <h2>{spellInfo.data.name}</h2>
        </div>
    );
}

// SpellInfo.propTypes = {
//     spellInfo: PropTypes.object
// };

export default SpellInfo;