import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the specific recipe based on the "id" from the route
    fetch(`http://localhost:5000/api/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => {
        console.error('Error fetching recipe data:', error);
        setRecipe(null);
      });
  }, [id]);

  return (
    <div className="recipe-detail">
      {recipe ? (
        <>
          <h1>{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} />
          <p>{recipe.description}</p>
          <p>Food Type: {recipe.foodType}</p>
          {/* Add more details as needed */}
        </>
      ) : (
        <div>Recipe not found.</div>
      )}
    </div>
  );
};

export default RecipeDetailPage;
