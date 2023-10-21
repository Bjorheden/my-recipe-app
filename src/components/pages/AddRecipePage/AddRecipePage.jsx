// AddRecipePage.js
import React from "react";
import AddRecipeForm from "../../organisms/AddRecipeForm/AddRecipeForm";
import './AddRecipePage.css'

const AddRecipePage = ({ onAddRecipe }) => {
    const handleAddRecipe = (recipeData) => {
        // This is where you can handle adding the recipe to your data store.
        // You can call the `onAddRecipe` function passed from your parent component.
        // Example:
        //onAddRecipe(recipeData);
        console.log(recipeData);
    };

    return (
        <div className="add-recipe-container">
            <AddRecipeForm onAddRecipe={handleAddRecipe}/>
        </div>
    );
};

export default AddRecipePage;
