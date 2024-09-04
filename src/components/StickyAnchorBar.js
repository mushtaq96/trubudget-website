import React from 'react';
import styled from 'styled-components';

const StickyBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;

const AnchorLink = styled.a`
  color: white;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const StickyAnchorBar = () => {
    return (
        <StickyBar>
            <AnchorLink href="#home">Home</AnchorLink>
            <AnchorLink href="#about">About</AnchorLink>
            <AnchorLink href="#app">App</AnchorLink>
            <AnchorLink href="#benefits">Benefits</AnchorLink>
            <AnchorLink href="#references">References</AnchorLink>
            <AnchorLink href="#community">Community</AnchorLink>
            <AnchorLink href="#contact">Contact</AnchorLink>
        </StickyBar>
    );
};

export default StickyAnchorBar;
