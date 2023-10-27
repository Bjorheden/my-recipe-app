// AddRecipeForm.js
import React, { useState } from "react";
import "./AddRecipeForm.css";
import InputField from "../../atoms/InputField/InputField";
import TextAreaField from "../../atoms/TextAreaField/TextAreaField";
import FieldList from "../../molecules/FieldList/FieldList";

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
        const value = e.target.value;
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

    const handleAddField = (fieldType) => {
        setRecipeData({
            ...recipeData,
            [fieldType]: [...recipeData[fieldType], ""],
        });
    };

    const handleRemoveField = (fieldType, index) => {
        const updatedData = { ...recipeData };
        updatedData[fieldType].splice(index, 1);
        setRecipeData(updatedData);
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
            <InputField
                label="Title:"
                type="text"
                name="title"
                value={recipeData.title}
                onChange={(e) => handleChange(e, "title")}
                margin="15px"
                required
            />
            <InputField
                label="Image URL:"
                type="text"
                name="image"
                value={recipeData.image}
                onChange={(e) => handleChange(e, "image")}
                margin="15px"
            />
            <TextAreaField
                label="Description:"
                name="description"
                value={recipeData.description}
                onChange={(e) => handleChange(e, "description")}
                margin="15px"
            />
            <InputField
                label="Food Type:"
                type="text"
                name="foodType"
                value={recipeData.foodType}
                onChange={(e) => handleChange(e, "foodType")}
                margin="15px"
            />
            <FieldList
                fieldLabel="Ingredients:"
                fieldType="input"
                items={recipeData.ingredients}
                onChange={(e, index) => handleChange(e, "ingredients", index)}
                onAdd={() => handleAddField("ingredients")} // Pass "ingredients" here
                onRemove={(index) => handleRemoveField("ingredients", index)} // Pass "ingredients" here
            />
            <FieldList
                fieldLabel="Instructions:"
                fieldType="textfield"
                items={recipeData.instructions}
                onChange={(e, index) => handleChange(e, "instructions", index)}
                onAdd={() => handleAddField("instructions")} // Pass "ingredients" here
                onRemove={(index) => handleRemoveField("instructions", index)} // Pass "ingredients" here
            />
            <button type="submit" className="add-recipe-button">
                Add Recipe
            </button>
        </form>
    );
};

export default AddRecipeForm;
