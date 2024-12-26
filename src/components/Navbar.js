// src/components/Navbar.js
import React from 'react';
import Logo from '../../static/img/orgas/Logo.png';
import MobileMenu from '../components/mobile/menu';

const Navbar = () => {
    return (
        <nav className="main-menu_landingpage">
            <div className="top-container">
                <div className="logo-and-button">
                    <img src={Logo} alt="TruBudget Logo" className='logo' />
                    <MobileMenu />
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
