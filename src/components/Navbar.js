import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={require('../Assets/Images/logo.png')} alt="Paintbox in Paradise Logo" />
            </div>
            <ul className="nav-links">
                {['Home', 'About', 'Fall', 'Winter', 'Spring', 'Summer', 'Nature', 'Animals', 'Glassware', 'Kids', 'Misc'].map((link) => (
                    <li key={link}>
                        <a href={`#${link.toLowerCase()}`}>{link}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
