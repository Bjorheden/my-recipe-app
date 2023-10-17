import React, { useState } from "react";
import "./AddRecipePage.css"; // Import your CSS for this page

const AddRecipePage = ({ onAddRecipe }) => {
    const [recipeData, setRecipeData] = useState({
        title: "",
        image: "",
        description: "",
        foodType: "",
        ingredients: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // If the input is for ingredients, split the comma-separated values into an array
        if (name === "ingredients") {
            const ingredientsArray = value
                .split(",")
                .map((ingredient) => ingredient.trim());
            setRecipeData({
                ...recipeData,
                [name]: ingredientsArray,
            });
        } else {
            setRecipeData({
                ...recipeData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate the input data here
        if (
            recipeData.title &&
            recipeData.description &&
            recipeData.ingredients
        ) {
            // Call the provided callback function to add the recipe
            // Reset the form
            setRecipeData({
                title: "",
                image: "",
                description: "",
                foodType: "",
                ingredients: [],
            });
        }
        console.log("Recipe Data:", recipeData);
    };

    return (
        <div className="add-recipe-container">
            <form onSubmit={handleSubmit} className="add-recipe-form">
                <h2>Add a New Recipe</h2>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={recipeData.title}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Image URL:
                    <input
                        type="text"
                        name="image"
                        value={recipeData.image}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={recipeData.description}
                        onChange={handleChange}
                    ></textarea>
                </label>
                <label>
                    Food Type:
                    <input
                        type="text"
                        name="foodType"
                        value={recipeData.foodType}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Ingredients (comma-separated):
                    <input
                        type="text"
                        name="ingredients"
                        value={recipeData.ingredients.join(", ")}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit" className="add-recipe-button">
                    Add Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipePage;
