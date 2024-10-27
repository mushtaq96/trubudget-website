// src/pages/index.js
import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import AboutSection from '../components/AboutSection';

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

      <main className="container bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-4">Tailwind Test</h1>
        <p className="text-lg text-blue-500">This is a test paragraph.</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Click me!
        </button>
      </main>


      {/* <main className="container">
        <AboutSection />

      </main> */}
    </Layout>
  );
};

export default Home;
