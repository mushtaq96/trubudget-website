// src/components/Navbar.js
import React from 'react';
import Logo from '../../static/img/orgas/Logo.png';
import MobileMenu from '../components/mobile/menu';

const Navbar = () => {
    return (
        <nav className="navbar mx-auto border-yellow border-4 rounded-md max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl h-16 bg-[#F0F0F04D] backdrop-blur-2xl shadow-md px-4 sm:px-6 md:px-8 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <img src={Logo} alt="TruBudget Logo" className="h-10" />
            </div>
            <div className="flex items-center space-x-4">
                {/* Navigation links visible only on lg and above */}
                <div className="hidden lg:flex space-x-4">
                    <a href="/docs/README" className="text-black px-4 py-2 rounded hover:bg-white hover:text-black">Documentation</a>
                    <a href="https://github.com/openkfw/TruBudget/discussions" className="text-black px-4 py-2 rounded hover:bg-white hover:text-black">Community</a>
                    <a href="https://github.com/openkfw/TruBudget" className="border border-black text-black px-4 py-2 rounded-3xl hover:bg-blue-600 hover:text-white">GitHub</a>
                    <a href="https://taas.trubudget.net" className="border border-black text-black px-4 py-2 rounded-3xl hover:bg-blue-600 hover:text-white">Demo</a>
                </div>
                {/* Hamburger menu for sm and md screen view */}
                <MobileMenu className="lg:hidden" />
            </div>
        </nav>
    );
};

export default Navbar;
