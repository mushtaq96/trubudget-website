// src/components/Button.js
import React from 'react';

const Button = ({ href, label }) => {
    return (
        <a
            href={href}
            className=""
        >
            {label}
        </a>
    );
};

export default Button;