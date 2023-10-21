// InputField.js
import React from "react";
import './InputField.css'

const InputField = ({ label, type, name, value, onChange, required }) => {
    return (
        <label>
            {label}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            />
        </label>
    );
};

export default InputField;
