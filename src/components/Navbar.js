import React from 'react';
import Logo from '../../static/img/orgas/Logo.png';
import MobileMenu from '../components/mobile/menu';
import DemoIcon from '../../static/img/navbar/DemoIcon.png';
import NewTabIcon from '../../static/img/navbar/NewTabIcon.png';

const Navbar = () => {
    return (
        <nav className="main-menu_landingpage">
            <div className="top-container">
                <div className="logo-and-button">
                    <img src={Logo} alt="TruBudget Logo" className='logo' />
                    {/* Documentation and Community Buttons */}
                    <div className="left-buttons lg-only">
                        <a href="/docs/README" className="text-button">Documentation</a>
                        <a href="https://github.com/openkfw/TruBudget/discussions" className="text-button">Community</a>
                    </div>
                    {/* Mobile Menu (Hidden on Large Screens) */}
                    <div className="md-only">
                        <MobileMenu />
                    </div>
                    {/* Buttons for Large Devices */}
                    <div className="navbar-buttons lg-only">

                        <button className="navbar-button">
                            <a href="https://github.com/openkfw/TruBudget">GitHub
                                <img src={NewTabIcon} alt="New Tab Icon" className='icon' /> </a>
                        </button>
                        <button className="navbar-button">
                            <a href="https://taas.trubudget.net">Demo
                                <img src={DemoIcon} alt="Demo Icon" className='icon' /> </a>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;