// InputField.js
import React from "react";
import "./InputField.css";

const InputField = ({ label, type, name, value, onChange, required }) => {
    return (
        <label className="input-field">
            {label}
            <input
                className="input-field-text"
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
