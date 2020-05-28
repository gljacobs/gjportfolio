import React from 'react';
import "./style.css";

function Footer() {
    return (
        <footer className="foot">
            <h4>Contact Me</h4>
            <div className="container">
                Gabriel Jacobs <br/>
                gabriel.luke.jacobs@gmail.com
                <a className="linkcon" href="https://github.com/gljacobs" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                <a className="linkcon" href="https://www.linkedin.com/in/gabriel-jacobs-3436aa162/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
        </footer>
    );
}

export default Footer;