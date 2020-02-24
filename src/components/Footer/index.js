import React from 'react';
import "./style.css";

function Footer() {
    return (
        <footer>
            <h4>Git in Contact</h4>
            <div className="container">
                Gabriel Jacobs <br/>
                gabriel.luke.jacobs@gmail.com
                <a className="linkcon" href="https://github.com/gljacobs" target="_blank"><i className="fab fa-github-square"></i></a>
                <a className="linkcon" href="https://www.linkedin.com/in/gabriel-jacobs-3436aa162/" target="_blank"><i className="fab fa-linkedin"></i></a>
            </div>
        </footer>
    );
}

export default Footer;