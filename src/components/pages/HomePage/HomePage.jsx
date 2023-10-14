import React from 'react';
import RecipeList from '../../organisms/RecipeList/RecipeList'; // Import the RecipeList component
import recipeData from '../../../data/recipeList'

const HomePage = () => {
  // You can replace this with real data fetched from your API or mock data


  return (
    <div className="homepage">
      <h1>Welcome to My Recipe App</h1>
      <h2>Featured Recipes</h2>
      <div className="featured-recipes">
        {/* Replace the mock data with the RecipeList component */}
        <RecipeList recipes={recipeData} />
      </div>
    </div>
  );
};

export default HomePage;