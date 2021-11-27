import React from "react";

const Error = ({searchTerm}) => {
    return (
        <div>
            <h2>Spell Not Found</h2>
            <p>We could not find the spell you searched for. Please check that it is spelled correctly.</p>
            <p><strong>Your Search: </strong>{searchTerm}</p>
        </div>
    );
}

export default Error;