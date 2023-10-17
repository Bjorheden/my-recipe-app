import React, { useState } from "react";
import "./SearchBar.css"; // Create a CSS file for styling

const SearchBar = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = () => {
        onSearch(searchInput); // Pass the search input to the parent component
    };

    return (
        <div className="search-bar-container">
            <input
                className="search-input"
                type="text"
                placeholder="Search recipe"
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
