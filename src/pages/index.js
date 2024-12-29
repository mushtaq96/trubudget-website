// src/pages/index.js
import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Hero from '../components/Hero';
import StickyAnchorBar from '../components/StickyAnchorBar';
import CustomNavbar from '../theme/Navbar';

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout>
      <Hero />
      <CustomNavbar />
      {/* <StickyAnchorBar /> */}
    </Layout>
  );
};

export default Home;
