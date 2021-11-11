import React from "react";

const Form = () => {
    return (
        <form>
            <input
                type="text"
                placeholder="Search for a spell!"
                required
            />

            <button
                type="submit"
            >
                Search
            </button>
        </form>
    );
  }

export default Form;