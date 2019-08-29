import React from 'react';
import './style.css';

function Navbar() {
    return (
        <nav id="navbar">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Gabriel Jacobs</a>
                <ul className="right">
                    <li><a href="/">/ Home</a></li>
                    <li><a href="/about">/ About</a></li>
                    <li><a href="/projects">/ Projects</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;