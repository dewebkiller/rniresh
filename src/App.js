import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from './Components/Header';
import Skills from './Components/Skills';
import Progress from './Components/Progress';
import PortfolioSection from './Components/PortfolioSection';
import Testimonial from './Components/Testimonial';
import Hireme from './Components/Hireme';
import BlogSection from './Components/BlogSection';
import Getintouch from './Components/Getintouch';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
  <HelmetProvider>
    <Helmet>
  <title>Niresh Shrestha | Frontend developer, WordPress Developer| Freelance WordPress Developer Nepal</title>
  <meta name="description" content="Niresh Shreastha is a skilled frontend developer and WordPress developer with a passion for creating visually stunning and highly functional websites."/>
  <meta name="keywords" content="Niresh Shrestha, Frontend developer, WordPress Developer, Freelance WordPress Developer Nepal kathmandu, Web Customization Services Kathmandu "/>
</Helmet>
    <div className="header">
      <Header />
      <Skills />
      <Progress />
      <Testimonial />
      <PortfolioSection />
      <Hireme />
      <BlogSection />
      <Getintouch />
      <Footer />
    </div>
    </HelmetProvider>
  );
}

export default App;
