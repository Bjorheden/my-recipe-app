import React, { useState, useEffect } from "react";
import RecipeCard from "../../molecules/RecipeCard/RecipeCard";
import "./HomePage.css";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Make an API request to your Flask backend to get the recipes
        fetch("http://localhost:5000/api/recipes")
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="homepage">
            <div className="featured-recipes">
                {recipes.map((recipe) => (
                    // Render RecipeCard components with recipe data
                    <RecipeCard
                        key={recipe.id}
                        title={recipe.title}
                        image={recipe.image}
                        description={recipe.description}
                        foodType={recipe.foodType}
                        id={recipe.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
