import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/system";

const StyledSearchBar = styled(TextField)({
    // Your custom styles here
    marginBottom: "30px",
    width: "400px",
    "& label.Mui-focused": {
        color: "green",
    },
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: "green",
        },
    },
    "& .MuiInputLabel-outlined": {
        transform: "translate(10px, -19px) scale(0.85)",
    },
});

const SearchBar = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = () => {
        onSearch(searchInput); // Pass the search input to the parent component
    };

    return (
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
    );
};

export default SearchBar;
