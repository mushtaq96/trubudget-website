// src/components/Button.js
import React from 'react';

const Button = ({ href, label }) => {
    return (
        <a
            href={href}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
            {label}
        </a>
    );
};

export default Button;