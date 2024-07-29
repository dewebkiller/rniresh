import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from './Components/Header';
import Skills from './Components/Skills';
import Progress from './Components/Progress';
import PortfolioList from './Components/PortfolioList';
import Testimonial from './Components/Testimonial';
import Hireme from './Components/Hireme';
import BlogSection from './Components/BlogSection';
import Getintouch from './Components/Getintouch';
import FooterSocial from './Components/FooterSocial';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
  <HelmetProvider>
    <Helmet>
  <title>Freelance WordPress Developer Nepal | Frontend developer | WordPress Developer  | Niresh Shrestha  </title>
  <meta name="description" content="Niresh Shreastha is a skilled Freelance WordPress developer from Nepal and Frontend developer and  with a passion for creating visually stunning and highly functional websites."/>
  <meta name="keywords" content="Freelance WordPress Developer Nepal kathmandu, Frontend developer, WordPress Developer, Niresh Shrestha, Web Customization Services Kathmandu, Plugin Development "/>
</Helmet>
    <div className="header">
      <Header />
      <Skills />
      <Progress />
      <Testimonial />
      <PortfolioList />
      <Hireme />
      <BlogSection />
      <Getintouch />
      <Footer />
      <FooterSocial />
    </div>
    </HelmetProvider>
  );
}

export default App;
