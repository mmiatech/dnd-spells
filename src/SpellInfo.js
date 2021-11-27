import React from "react";
import PropTypes from "prop-types";

const SpellInfo = ({spellInfo}) => {
    // console.log({spellInfo});
    // console.log(spellInfo.data);
    // console.log(spellInfo.data.name);
    const components = spellInfo.data.components.reduce((x, component) => {
        return `${x}, ${component}`
    } )

    return (
        <div>
            <h2>{spellInfo.data.name}</h2>
            <p><strong>Casting Time: </strong>{spellInfo.data.casting_time}</p>
            <p><strong>Range: </strong>{spellInfo.data.range}</p>
            <p><strong>Compents: </strong>
                {components}
            </p>
            <p><strong>Duration: </strong>{spellInfo.data.duration}</p>
            <p><strong>Classes: </strong>
                {spellInfo.data.classes[0].name}
            </p>
            <p>{spellInfo.data.desc[0]}</p>
        </div>
    );
}

SpellInfo.propTypes = {
    spellInfo: PropTypes.object
};

export default SpellInfo;