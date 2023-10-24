import React, { useState } from "react";
import "./TopNavigationBar.css";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import ButtonToggleSidebarMenu from "../../atoms/ButtonToggleSidebarMenu/ButtonToggleSidebarMenu";

const TopNavigationBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="top-navigation-bar">
            
            <ButtonToggleSidebarMenu
                isMenuOpen={isMenuOpen}
                setMenuOpen={setMenuOpen}
            />
            <h1 className="page-title">My Recipe App</h1>
            <SidebarMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
        </div>
    );
};

export default TopNavigationBar;