// AddRecipePage.js
import React from "react";
import AddRecipeForm from "../../organisms/AddRecipeForm/AddRecipeForm";
import "./AddRecipePage.css";

const AddRecipePage = ({ onAddRecipe }) => {
    const handleAddRecipe = (recipeData) => {
        fetch("http://localhost:5000/api/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recipeData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Recipe added successfully:", data);
                // Optionally, you can add code to navigate to a different page or show a success message to the user.
            })
            .catch((error) => {
                console.error("Error adding recipe:", error);
                // Handle errors here, e.g., display an error message to the user.
            });
    };

    return (
        <div className="add-recipe-container">
            <AddRecipeForm onAddRecipe={handleAddRecipe} />
        </div>
    );
};

export default AddRecipePage;
