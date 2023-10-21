import React from "react";
import "./Footer.css"; // Import your CSS for the buttons

const Footer = () => {
    // Define the CSS class based on the 'type' prop

    return (
        <div className="footer">
            <div className="copyright">
                © 2023 Joakim Björheden. All rights reserved.
            </div>
            <p>Background is &nbsp;</p>
            <a href="http://www.freepik.com">
                
                Designed by macrovector / Freepik
            </a>
            
        </div>
    );
};

export default Footer;
