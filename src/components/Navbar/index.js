import React from 'react';
import './style.css';

function Navbar() {
    return (
        <nav id="navbar">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">My Portfolio</a>
                <ul className="right">
                    <li><a href="#about">/ About</a></li>
                    <li><a href="#skills">/ Skills</a></li>
                    <li><a href="#gallery">/ Projects</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;