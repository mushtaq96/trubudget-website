// src/components/Button.js
import React from 'react';

const TopBar = () => {
    return (
        <div className="topbar-container">
            <div className='topbar-ellipses'>
                <div className='ellipse-1'></div>
                <div className='ellipse-2'></div>
                <div className='ellipse-3'></div>
            </div>
            <div className='topbar-rectange'></div>
        </div>
    );
};

export default TopBar;