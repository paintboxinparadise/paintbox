import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-text">
                <h2 style={{ color: '#5E5E5E' }}>(714) 393-2501</h2>
                <h1 style={{ color: '#A6629D' }}>Let Me Entertain You</h1>
                <p style={{ color: '#1B1B1B' }}>Let me bring a spark to your entertainment!</p>
                <button>Book Event</button>
            </div>
        </header>
    );
}

export default Header;
