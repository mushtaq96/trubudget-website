import React from 'react';
import ToTop from '../../static/img/Back-to-top-btn.png';

const StickyAnchorBar = () => {
  return (
    <div className="anchormenu sticky bottom-16 left-8 mx-80 mb-10 rounded-lg w-[836px] h-[18px] bg-f0f0f04d text-black px-4 py-2 bg-[#F0F0F04D]">
      <div className="buttons flex justify-between items-center">
        <a href="#about" className="px-4 py-2 rounded hover:bg-blue-600 hover:text-white hover:no-underline">About</a>
        <a href="#app" className="px-4 py-2 rounded hover:bg-blue-600 hover:text-white hover:no-underline">App</a>
        <a href="#benefits" className="px-4 py-2 rounded hover:bg-blue-600 hover:text-white hover:no-underline"> Benefits</a>
        <a href="#references" className="px-4 py-2 rounded hover:bg-blue-600 hover:text-white hover:no-underline">References</a>
        <a href="#community" className="px-4 py-2 rounded hover:bg-blue-600 hover:text-white hover:no-underline">Community</a>
        <a href="#contact" className="px-4 py-2 rounded hover:bg-blue-600 hover:text-white hover:no-underline">Contact</a>
        <div className="ml-4">
          <a href="#top">
            <img src={ToTop} alt="Back to Top" className="w-12 h-auto" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyAnchorBar;