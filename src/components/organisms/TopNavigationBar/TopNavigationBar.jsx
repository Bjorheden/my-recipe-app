import React, { useState } from "react";
import "./TopNavigationBar.css";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import MenuIcon from "@mui/icons-material/Menu"; // Import the Menu icon

const TopNavigationBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="top-navigation-bar">
            <button className="menu-icon" onClick={openMenu}>
                <MenuIcon className="custom-menu-icon" />
            </button>
            <h1 className="page-title">My Recipe App</h1>
            <SidebarMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
        </div>
    );
};

export default TopNavigationBar;