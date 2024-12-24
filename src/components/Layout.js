// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import Connect from './Connect';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Connect />
        </>
    );
};

export default Layout;
