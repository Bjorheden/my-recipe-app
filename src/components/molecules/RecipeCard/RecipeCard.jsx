import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link
import "./RecipeCard.css";

const RecipeCard = ({ title, image, description, foodType, id, recipe }) => {
    return (
        <Link
            to={{ pathname: `/recipe/${id}`, state: { recipe } }}
            className="recipe-card-link"
        >
            <div className="recipe-card">
                <img src={image} alt={title} />
                <h3 className="recipe-title">{title}</h3>
                <p className="recipe-description">{description}</p>
                <p className="recipe-food-type">{foodType}</p>
            </div>
        </Link>
    );
};

RecipeCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    foodType: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default RecipeCard;
