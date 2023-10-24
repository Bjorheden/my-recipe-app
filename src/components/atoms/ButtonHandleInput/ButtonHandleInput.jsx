import React from "react";
import "./ButtonHandleInput.css"; // Import your CSS for the buttons

const ButtonHandleInput = ({ onClick, action, text }) => {
    // Define the CSS class based on the 'type' prop
    const buttonClass = action === "add" ? "add-input-button" : "remove-input-button";

    return (
        <button
            className={buttonClass}
            onClick={onClick}
            type="button"
        >
            {action === "add" ? `+ ${text}` : text}
        </button>
    );
};

export default ButtonHandleInput;