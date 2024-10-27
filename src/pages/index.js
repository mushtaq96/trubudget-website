// src/pages/index.js
import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import AboutSection from '../components/AboutSection';
import Hero from '../components/Hero';
import StickyAnchorBar from '../components/StickyAnchorBar';

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    setTimeout(() => {
      window.cookieconsent.initialise({
        // ... cookie consent configuration
      });
    }, 3000);
  }, []);

  return (
    <Layout>
      <Hero />
      <StickyAnchorBar />
    </Layout>
  );
};

export default Home;
