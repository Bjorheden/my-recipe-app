import React from "react";
import "./ButtonSidebarMenu.css";

const ButtonSidebarMenu = ({ icon, onClick, text }) => {
    return (
        <>
            <button
                className="sidebar-menu-button" // You can define a class for styling
                onClick={onClick}
            >
                <div className="icon">{icon}</div>
                {text}
            </button>
        </>
    );
};

export default ButtonSidebarMenu;
