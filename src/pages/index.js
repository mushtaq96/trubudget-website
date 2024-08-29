// src/pages/index.js
import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import BenefitsSection from './components/BenefitsSection';
import VideoSection from './components/VideoSection';
import PilotProjectsSection from './components/PilotProjectsSection';
import CommunitySection from './components/CommunitySection';
import ContactSection from './components/ContactSection';
import ImpressumSection from './components/ImpressumSection';

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
    <Layout
      title={`${siteConfig.title}`}
      description="TruBudget - a trusted public expenditure tool"
    >
      <Head>
        {/* Add necessary meta tags and stylesheets */}
      </Head>

      <main className="container">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <BenefitsSection />
        <VideoSection />
        <PilotProjectsSection />
        <CommunitySection />
        <ContactSection />
        <ImpressumSection />
      </main>
    </Layout>
  );
};

export default Home;
