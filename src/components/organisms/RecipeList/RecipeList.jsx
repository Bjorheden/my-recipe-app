import React from "react";
import PropTypes from "prop-types";
import RecipeCard from "../../molecules/RecipeCard/RecipeCard"; // Import the RecipeCard component
import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <RecipeCard
                    id={recipe.id}
                    title={recipe.title}
                    image={recipe.image}
                    description={recipe.description}
                    foodType={recipe.foodType}
                />
            ))}
        </div>
    );
};

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            foodType: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default RecipeList;
