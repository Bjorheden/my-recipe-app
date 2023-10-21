import React, { useState, useEffect } from "react";
import RecipeCard from "../../molecules/RecipeCard/RecipeCard";
import SearchBar from "../../atoms/SearchBar/SearchBar";
import "./HomePage.css";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        // Make an API request to your Flask backend to get the recipes
        fetch(`http://localhost:5000/api/recipes?search=${searchQuery}`)
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [searchQuery]);

    const handleSearch = (query) => {
        console.log(query);
        setSearchQuery(query); // Set the search query to trigger a new API request
    };

    return (
        <div className="homepage">
            <SearchBar onSearch={handleSearch} />
            {Array.isArray(recipes) && recipes.length > 0 ? (
                <div className="featured-recipes">
                    {recipes.map((recipe) => (
                        // Render RecipeCard components with recipe data
                        <RecipeCard
                            key={recipe._id}
                            title={recipe.title}
                            image={recipe.image}
                            description={recipe.description}
                            foodType={recipe.foodType}
                            id={recipe._id}
                        />
                    ))}
                </div>
            ) : (
                <p>No recipes found for the search query.</p>
            )}
        </div>
    );
};

export default HomePage;
