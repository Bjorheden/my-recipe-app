import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/system";
import "./SearchBar.css";

const StyledSearchBar = styled(TextField)({
    // Your custom styles here
    marginBottom: "30px",
    width: "400px",
    "& label.MuiInputLabel-root": {
        color: "white", // Change the color here
    },
    "& label.MuiInputLabel-root.Mui-focused": {
        color: "green", // Change the color here
    },
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: "green",
        },
        "&.MuiOutlinedInput-notchedOutline": {
            borderWidth: "px", // Adjust the thickness as needed
        },
        "& fieldset": {
            borderColor: "white",
        },
        "& .MuiSvgIcon-root": {
            color: "white", // Change the color here
        },
    },
    "& .MuiInputLabel-outlined": {
        transform: "translate(10px, -30px) scale(0.85)",
    },
});

const SearchBar = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = () => {
        onSearch(searchInput); // Pass the search input to the parent component
    };

    return (
        <div className="search-bar-container">
            <StyledSearchBar
                id="search"
                label="Search recipe"
                variant="outlined"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
            />
        </div>
    );
};

export default SearchBar;
