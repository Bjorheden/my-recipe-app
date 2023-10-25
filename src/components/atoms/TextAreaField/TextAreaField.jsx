import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system"; // Import styled from Material-UI
import "./TextAreaField.css"; // You can keep your custom CSS

// Create a custom styled TextField
const CustomTextField = styled(TextField)(({ theme }) => ({
    marginBottom: theme.spacing(2), // Add margin bottom
    "& .MuiInputLabel-root": {
        color: "white", // Change the label color to white
    },
    "& .MuiInputBase-input": {
        color: "white", // Change the input text color to white
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "white", // Change the border color to white
        },
        "&:hover fieldset": {
            borderColor: "#8F6518", // Change the border color on hover to white
        },
        "&.Mui-focused fieldset": {
            borderColor: "#8F6518", // Change the border color on focus to white
        },
    },
}));

const TextAreaField = ({ label, name, value, onChange }) => {
    return (
        <CustomTextField
            fullWidth
            multiline
            rows={3} // You can adjust the number of rows as needed
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            variant="outlined" // Use an outlined variant for a border
        />
    );
};

export default TextAreaField;
