import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SidebarMenu.css";
import ButtonSidebarMenu from "../../atoms/ButtonSidebarMenu/ButtonSidebarMenu";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from '@mui/icons-material/Home';

const SidebarMenu = ({ isOpen, closeMenu }) => {
    const navigate = useNavigate(); // Hook for navigation

    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                closeMenu();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, closeMenu]);

    const navigateToHome = () => {
        navigate("/"); // Redirect to the homepage
        closeMenu(); // Close the menu
    };

    return (
        <div className={`side-menu ${isOpen ? "open" : ""}`} ref={menuRef}>
            <div className="button-container">
                <ButtonSidebarMenu
                    icon={<HomeIcon />}
                    onClick={navigateToHome} // Call the function to navigate and close
                    text="Home"
                ></ButtonSidebarMenu>
                <ButtonSidebarMenu
                    icon={<AddIcon />}
                    onClick={closeMenu}
                    text="Add recipe"
                ></ButtonSidebarMenu>
                <ButtonSidebarMenu
                    icon={<CloseIcon />}
                    onClick={closeMenu}
                    text="Close"
                ></ButtonSidebarMenu>
            </div>
        </div>
    );
};

export default SidebarMenu;
