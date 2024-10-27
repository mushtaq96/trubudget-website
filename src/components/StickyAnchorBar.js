// src/components/StickyAnchorBar.js
import React from 'react';

const StickyAnchorBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white flex justify-around py-4">
      <a href="#about" className="hover:underline">About</a>
      <a href="#app" className="hover:underline">App</a>
      <a href="#benefits" className="hover:underline">Benefits</a>
      <a href="#references" className="hover:underline">References</a>
      <a href="#community" className="hover:underline">Community</a>
      <a href="#contact" className="hover:underline">Contact</a>
    </div>
  );
};

export default StickyAnchorBar;