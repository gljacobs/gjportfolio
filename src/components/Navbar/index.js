import React from 'react';
import './style.css';

function Navbar() {

    var handleScrollToElement = (event) => {
        var elmnt = document.getElementById(event.target.value);
        elmnt.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav id="navbar">
            <div className="nav-wrapper">
                <a href="./" className="brand-logo">Dev Portfolio</a>
                <ul className="right">
                    <li><button value="about" onClick={handleScrollToElement}>/ About</button></li>
                    <li><button value="skills" onClick={handleScrollToElement}>/ Skills</button></li>
                    <li><button value="gallery" onClick={handleScrollToElement}>/ Projects</button></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;