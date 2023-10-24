// AddRecipePage.js
import React, {useState} from "react";
import AddRecipeForm from "../../organisms/AddRecipeForm/AddRecipeForm";
import ModalAddRecipeSuccess from "../../molecules/ModalAddRecipeSuccess/ModalAddRecipeSuccess";
import "./AddRecipePage.css";

const AddRecipePage = ({ onAddRecipe }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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

                setIsModalOpen(true);
                // Optionally, you can add code to navigate to a different page or show a success message to the user.
            })
            .catch((error) => {
                console.error("Error adding recipe:", error);
                // Handle errors here, e.g., display an error message to the user.
            });
    };

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="add-recipe-container">
            <AddRecipeForm onAddRecipe={handleAddRecipe} />
            <ModalAddRecipeSuccess isOpen={isModalOpen} onRequestClose={closeModal} />
            <button onClick={openModal}>Test</button>
        </div>
    );
};

export default AddRecipePage;
