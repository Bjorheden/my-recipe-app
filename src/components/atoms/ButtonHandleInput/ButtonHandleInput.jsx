import React from "react";
import "./ButtonHandleInput.css"; // Import your CSS for the buttons

const ButtonHandleInput = ({ onClick, text, action }) => {
    // Define the CSS class based on the 'type' prop
    const buttonClass = action === "add" ? "add-input-button" : "remove-input-button";

    return (
        <button
            className={buttonClass}
            onClick={onClick}
            type="button"
        >
            {text}
        </button>
    );
};

export default ButtonHandleInput;