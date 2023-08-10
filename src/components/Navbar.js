import React from 'react';
import { Link } from 'react-router-dom';
import './style/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link className="navbar-logo" to="/">AndyJou</Link>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link className="navbar-link" to="/">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="navbar-link" to="/projects">Projects</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="navbar-link" to="/demo">Demo</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="navbar-link" to="/about-me">About Me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
