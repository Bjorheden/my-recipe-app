import React from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonHome.css"; // Import your CSS for the buttons

const ButtonHome = () => {
    const navigate = useNavigate(); // Hook for navigation

    const navigateToHome = () => {
        navigate("/"); // Redirect to the homepage
    };

    return (
        <button className="home-button" onClick={navigateToHome}>
            Back to Home
        </button>
    );
};

export default ButtonHome;
