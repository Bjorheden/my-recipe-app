// TextAreaField.js
import React from "react";
import './TextAreaField.css'

const TextAreaField = ({ label, name, value, onChange }) => {
    return (
        <label className="text-area-field">
            {label}
            <textarea className='text-area-field-text' name={name} value={value} onChange={onChange}></textarea>
        </label>
    );
};

export default TextAreaField;
