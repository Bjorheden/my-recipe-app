// TextAreaField.js
import React from "react";
import './TextAreaField.css'

const TextAreaField = ({ label, name, value, onChange }) => {
    return (
        <label>
            {label}
            <textarea className='text-area-field' name={name} value={value} onChange={onChange}></textarea>
        </label>
    );
};

export default TextAreaField;
