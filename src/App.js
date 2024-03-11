import React from 'react';
import useDocumentTitle from './Components/useDocumentTitle'
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
  useDocumentTitle('Niresh Shrestha | Frontend developer, WordPress Developer| Freelance WordPress Developer Nepal')
  return (
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
  );
}

export default App;
