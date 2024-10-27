// src/components/Navbar.js
import React from 'react';
import Logo from '../../static/img/orgas/Logo.png';

const Navbar = () => {
    return (
        <nav className="navbar mx-auto border-yellow border-4 rounded-md w-1280 h-58 bg-[#F0F0F04D] backdrop-blur-2xl shadow-md px-16 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <img src={Logo} alt="TruBudget Logo" className="h-10" />
                <a href="/docs/README" className="text-black px-4 py-2 rounded hover:bg-white hover:text-black hover:no-underline">Documentation</a>
                <a href="https://github.com/openkfw/TruBudget/discussions" className="text-black px-4 py-2 rounded hover:bg-white hover:text-black hover:no-underline">Community</a>
            </div>
            <div className="flex items-center space-x-4">
                <a href="https://github.com/openkfw/TruBudget" className="border border-black text-black px-4 py-2 rounded-3xl hover:bg-blue-600 hover:text-white">GitHub</a>
                <a href="https://taas.trubudget.net" className="border border-black text-black px-4 py-2 rounded-3xl hover:bg-blue-600 hover:text-white">Demo</a>
            </div>
        </nav>
    );
};

export default Navbar;