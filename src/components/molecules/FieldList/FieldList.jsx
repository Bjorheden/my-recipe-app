// FieldList.js
import React from "react";
import ButtonHandleInput from "../../atoms/ButtonHandleInput/ButtonHandleInput";
import "./FieldList.css";

const FieldList = ({
    items,
    onAdd,
    onRemove,
    onChange,
    placeholder,
    fieldLabel,
    fieldType,
}) => {
    return (
        <div className="field-list">
            {fieldLabel}
            {fieldType === "input"
                ? items.map((item, index) => (
                      <div key={index} className="list-item">
                          <input
                              className="field-list-item"
                              type="text"
                              value={item}
                              onChange={(e) => onChange(e, index)}
                              placeholder={placeholder}
                          />
                          <ButtonHandleInput
                              className="remove-button"
                              onClick={() => onRemove(index)}
                              action="remove"
                              text="X"
                          />
                      </div>
                  ))
                : items.map((item, index) => (
                      <div key={index} className="list-item">
                          <textarea
                              className="field-list-item"
                              type="text"
                              value={item}
                              onChange={(e) => onChange(e, index)}
                              placeholder={placeholder}
                          />
                          <ButtonHandleInput
                              className="remove-button"
                              onClick={() => onRemove(index)}
                              action="remove"
                              text="X"
                          />
                      </div>
                  ))}
            {fieldLabel === "Instructions:" ? (
                <ButtonHandleInput
                    onClick={onAdd}
                    action="add"
                    text="Add instructions"
                />
            ) : (
                <ButtonHandleInput
                    onClick={onAdd}
                    action="add"
                    text="Add ingredients"
                />
            )}
        </div>
    );
};

export default FieldList;
