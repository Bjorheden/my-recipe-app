import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import recipeList from '../../../data/recipeList'; // Import the recipeList data
import './RecipeDetailPage.css'; // Add your CSS import

const RecipeDetailPage = () => {
  // Use the useParams hook to get the "id" from the URL parameter
  const { id } = useParams();
  
  // Convert the "id" to a number
  const recipeId = Number(id);

  // Find the recipe with the matching ID
  const selectedRecipe = recipeList.find((recipe) => recipe.id === recipeId);

  // Check if the recipe exists
  if (!selectedRecipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div className="recipe-detail">
      <h1>{selectedRecipe.title}</h1>
      <img src={selectedRecipe.image} alt={selectedRecipe.title} />
      <p>{selectedRecipe.description}</p>
      <p>Food Type: {selectedRecipe.foodType}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default RecipeDetailPage;
