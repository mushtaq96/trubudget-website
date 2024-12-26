import React, { useState } from 'react';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative z-50">
            <button
                onClick={toggleMenu}
                aria-expanded={isOpen}
                className="navbar__hamburger"
            >
                {isOpen ? (
                    // "X" symbol
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                ) : (
                    // Hamburger icon
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                )}
            </button>
            {isOpen && (
                <div className="mobile-menu-content xs-only">
                    <div className="menu-grid">
                        <div className="menu-column">
                            <h3>Internal</h3>
                            <a href="/docs/README">Documentation</a>
                            <a href="https://github.com/openkfw/TruBudget/discussions">Community</a>
                        </div>
                        <div className="menu-column">
                            <h3>External</h3>
                            <a href="https://github.com/openkfw/TruBudget">GitHub</a>
                            <a href="https://taas.trubudget.net">Demo</a>
                        </div>
                        <div className="menu-column">
                            <h3>Legal</h3>
                            <a href="/contact">Contact</a>
                            <a href="/disclaimer">Disclaimer</a>
                            <a href="/impressum">Impressum</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;