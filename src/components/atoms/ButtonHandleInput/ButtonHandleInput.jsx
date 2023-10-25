import React from "react";
import "./ButtonHandleInput.css"; // Import your CSS for the buttons
import { FaRegTrashCan } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";

const ButtonHandleInput = ({ onClick, action, text }) => {
    // Define the CSS class based on the 'type' prop
    const buttonClass =
        action === "add" ? "add-input-button" : "remove-input-button";

    return (
        <button className={buttonClass} onClick={onClick} type="button">
            {action === "add" ? (
                <>
                    <MdAdd />{text}
                </>
            ) : (
                <FaRegTrashCan />
            )}
        </button>
    );
};

export default ButtonHandleInput;
