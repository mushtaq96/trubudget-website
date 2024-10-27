// src/components/MobileMenu.js
import React, { useState } from 'react';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative z-50">
            <button
                className="text-black focus:outline-none block lg:hidden"
                onClick={toggleMenu}
                aria-expanded={isOpen}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-full sm:w-96 bg-white rounded-md shadow-lg py-1 z-50">
                    { /* For small screens, stack in one column */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 px-4 py-2">
                        <div>
                            <h3 className="font-bold">Internal</h3>
                            <a href="/docs/README" className="block text-black hover:bg-gray-100 px-2 py-1">Documentation</a>
                            <a href="https://github.com/openkfw/TruBudget/discussions" className="block text-black hover:bg-gray-100 px-2 py-1">Community</a>
                        </div>
                        <div>
                            <h3 className="font-bold">External</h3>
                            <a href="https://github.com/openkfw/TruBudget" className="block text-black hover:bg-gray-100 px-2 py-1">GitHub</a>
                            <a href="https://taas.trubudget.net" className="block text-black hover:bg-gray-100 px-2 py-1">Demo</a>
                        </div>
                        <div>
                            <h3 className="font-bold">Legal</h3>
                            <a href="/contact" className="block text-black hover:bg-gray-100 px-2 py-1">Contact</a>
                            <a href="/disclaimer" className="block text-black hover:bg-gray-100 px-2 py-1">Disclaimer</a>
                            <a href="/impressum" className="block text-black hover:bg-gray-100 px-2 py-1">Impressum</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
