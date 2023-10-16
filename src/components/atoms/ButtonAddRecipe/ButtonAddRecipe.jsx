import React from "react";
import './ButtonAddRecipe.css';

const ButtonAddRecipe = ({ onClick }) => {
  return (
    <button
      className="add-recipe-button" // You can define a class for styling
      onClick={onClick}
    >
      Add Recipe
    </button>
  );
};

export default ButtonAddRecipe;
