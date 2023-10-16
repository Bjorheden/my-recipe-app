import React from 'react';
import './SidebarMenu.css';

const SidebarMenu = ({ isOpen, closeMenu }) => {
  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={closeMenu}>
        Close
      </button>
      {/* Add your menu items here */}
    </div>
  );
};

export default SidebarMenu;
