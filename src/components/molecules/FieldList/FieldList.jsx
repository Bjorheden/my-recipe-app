import React from "react";
import ButtonHandleInput from "../../atoms/ButtonHandleInput/ButtonHandleInput";
import InputField from "../../atoms/InputField/InputField"; // Import the InputField component
import TextAreaField from "../../atoms/TextAreaField/TextAreaField"; // Import the TextAreaField component
import "./FieldList.css";

const FieldList = ({
    items,
    onAdd,
    onRemove,
    onChange,
    fieldLabel,
    fieldType,
}) => {
    return (
        <div className="field-list">
            {fieldType === "input"
                ? items.map((item, index) => (
                      <div key={index} className="list-item">
                          <InputField // Use the InputField component
                              label="Ingredient:"
                              type="text"
                              name={`item-${index}`}
                              value={item}
                              onChange={(e) => onChange(e, index)}
                              required={false}
                              margin="5px"
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
                          <TextAreaField // Use the TextAreaField component
                              label="Instructions:"
                              name={`item-${index}`}
                              value={item}
                              onChange={(e) => onChange(e, index)}
                              margin="5px"
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
                    text="Add ingredient"
                />
            )}
        </div>
    );
};

export default FieldList;
