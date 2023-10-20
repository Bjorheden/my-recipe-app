// AddRecipeForm.js
import React, { useState } from "react";
import "./AddRecipeForm.css";
import ButtonHandleInput from "../../atoms/ButtonHandleInput/ButtonHandleInput";

const AddRecipeForm = ({ onAddRecipe }) => {
    const [recipeData, setRecipeData] = useState({
        title: "",
        image: "",
        description: "",
        foodType: "",
        ingredients: [""],
        instructions: [""],
    });

    const handleChange = (e, field, index) => {
        const value = e.target;
        if (field === "ingredients" || field === "instructions") {
            const updatedData = { ...recipeData };
            updatedData[field][index] = value;
            setRecipeData(updatedData);
        } else {
            setRecipeData({
                ...recipeData,
                [field]: value,
            });
        }
    };

    const handleAddIngredient = () => {
        setRecipeData({
            ...recipeData,
            ingredients: [...recipeData.ingredients, ""],
        });
    };

    const handleRemoveIngredient = (index) => {
        const updatedIngredients = [...recipeData.ingredients];
        updatedIngredients.splice(index, 1);
        setRecipeData({ ...recipeData, ingredients: updatedIngredients });
    };

    const handleAddInstruction = () => {
        setRecipeData({
            ...recipeData,
            instructions: [...recipeData.instructions, ""],
        });
    };

    const handleRemoveInstruction = (index) => {
        const updatedInstructions = [...recipeData.instructions];
        updatedInstructions.splice(index, 1);
        setRecipeData({ ...recipeData, instructions: updatedInstructions });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            recipeData.title &&
            recipeData.description &&
            recipeData.ingredients.length > 0
        ) {
            onAddRecipe(recipeData); // Call the provided callback function to add the recipe
            setRecipeData({
                title: "",
                image: "",
                description: "",
                foodType: "",
                ingredients: [""],
                instructions: [""],
            });
        }
    };

    return (
        <form className="add-recipe-form" onSubmit={handleSubmit}>
            <h2>Add a New Recipe</h2>
            <label>
                Title:
                <input
                    type="text"
                    name="title"
                    value={recipeData.title}
                    onChange={(e) => handleChange(e, "title")}
                    required
                />
            </label>
            <label>
                Image URL:
                <input
                    type="text"
                    name="image"
                    value={recipeData.image}
                    onChange={(e) => handleChange(e, "image")}
                />
            </label>
            <label>
                Description:
                <textarea
                    name="description"
                    value={recipeData.description}
                    onChange={(e) => handleChange(e, "description")}
                ></textarea>
            </label>
            <label>
                Food Type:
                <input
                    type="text"
                    name="foodType"
                    value={recipeData.foodType}
                    onChange={(e) => handleChange(e, "foodType")}
                />
            </label>
            <div className="ingredient-section">
                <label>Ingredients:</label>
                {recipeData.ingredients.map((ingredient, index) => (
                    <div key={index} className="ingredient-input">
                        <input
                            type="text"
                            name="ingredients"
                            placeholder="Ingredient"
                            value={ingredient}
                            onChange={(e) =>
                                handleChange(e, "ingredients", index)
                            }
                        />
                        <ButtonHandleInput
                            onClick={() => handleRemoveIngredient(index)}
                            action="remove"
                            text="X"
                        />
                    </div>
                ))}
                <ButtonHandleInput
                    onClick={handleAddIngredient}
                    action="add"
                    text="Add ingredient"
                />
            </div>
            <div className="instruction-section">
                <label>Instructions:</label>
                {recipeData.instructions.map((instruction, index) => (
                    <div key={index} className="instruction-input">
                        <textarea
                            name="instructions"
                            placeholder={`Step ${index + 1}`}
                            value={instruction}
                            onChange={(e) =>
                                handleChange(e, "instructions", index)
                            }
                        />
                        <ButtonHandleInput
                            onClick={() => handleRemoveInstruction(index)}
                            action="remove"
                            text="X"
                        />
                    </div>
                ))}
                <ButtonHandleInput
                    onClick={handleAddInstruction}
                    action="add"
                    text="Add instruction"
                />
            </div>
            <button type="submit" className="add-recipe-button">
                Add Recipe
            </button>
        </form>
    );
};

export default AddRecipeForm;
