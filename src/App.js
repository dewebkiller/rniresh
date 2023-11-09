import React from 'react';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Progress from './Components/Progress';
import Portfolio from './Components/Portfolio';
import Testimonial from './Components/Testimonial';
import Hireme from './Components/Hireme';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="header">
      <Header />
      <Skills />
      <Progress />
      <Testimonial />
      <Portfolio />
      <Hireme />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
