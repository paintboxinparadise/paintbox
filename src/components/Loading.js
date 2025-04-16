import React from 'react';
import '../styles/Loading.css';
import logo from '../Assets/Images/logo.png'; // Replace with the path to your logo

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="logo-wrapper">
                <img src={logo} alt="Logo" className="logo" />
                <div className="reveal-mask"></div>
            </div>
        </div>
    );
};

export default Loading;
