import React from "react";
import PropTypes from "prop-types";

const SpellInfo = ({spellInfo}) => {
    // reformat component types
    const componentsList = spellInfo.data.components.reduce((list, c) => {
        return `${list}, ${c}`
    });

    // reformat classes
    const classesList = spellInfo.data.classes.map(c =>
        c.name
    ).join(", ");

    // reformat description
    const description = spellInfo.data.desc.map(x =>
        <p>{x}</p>
    );

    return (
        <div className="info-display">
            <h2>{spellInfo.data.name}</h2>
            <p><strong>Casting Time: </strong>{spellInfo.data.casting_time}</p>
            <p><strong>Range: </strong>{spellInfo.data.range}</p>
            <p><strong>Components: </strong>{componentsList}</p>
            <p><strong>Duration: </strong>{spellInfo.data.duration}</p>
            <p><strong>Classes: </strong>{classesList}</p>
            <p>{description}</p>
        </div>
    );
}

SpellInfo.propTypes = {
    spellInfo: PropTypes.object
};

export default SpellInfo;