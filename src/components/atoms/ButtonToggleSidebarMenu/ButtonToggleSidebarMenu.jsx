import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import './ButtonToggleSidebarMenu.css'

const ButtonToggleSidebarMenu = ({ isMenuOpen, setMenuOpen }) => {
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen); // Toggle the menu state
    };

    return (
        <button className="toggle-sidebar-button" onClick={toggleMenu}>
            {isMenuOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
        </button>
    );
};

export default ButtonToggleSidebarMenu;
