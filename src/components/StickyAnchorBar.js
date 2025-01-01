import React from 'react';
import ToTop from '../../static/img/Back-to-top-btn.png';

const StickyAnchorBar = () => {
  return (
    <div className="anchormenu">
      <div className="buttons">
        <a href="#about" className="anchor-link">About</a>
        <a href="#app" className="anchor-link">App</a>
        <a href="#benefits" className="anchor-link">Benefits</a>
        <a href="#references" className="anchor-link">References</a>
        <a href="#community" className="anchor-link">Community</a>
        <a href="#contact" className="anchor-link">Contact</a>
        <div className="back-to-top">
          <a href="#top">
            <img src={ToTop} alt="Back to Top" className="to-top-image" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyAnchorBar;

