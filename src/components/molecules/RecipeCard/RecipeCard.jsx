import React from 'react';
import PropTypes from 'prop-types';
import './RecipeCard.css';

const RecipeCard = ({ title, image, description, foodType }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} />
      <h3 className="recipe-title">{title}</h3>
      <p className="recipe-description">{description}</p>
      <p className="recipe-food-type">{foodType}</p>
    </div>
  );
};

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  foodType: PropTypes.string.isRequired,
};

export default RecipeCard;
