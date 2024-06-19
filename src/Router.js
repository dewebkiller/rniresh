import React from "react";
import About from './Components/About';
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import SinglePage from "./Components/SingePage";
import ContactUs from "./Components/contactform";
import App from "./App";
import { BrowserRouter as Routerm, Routes, Route, Navigate } from "react-router-dom";

function Router(){
  return(
    <Routerm>
        <Routes>
        <Route path="/" element={<App />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/singlepage" element={<SinglePage/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Routerm>
  )
}
export default Router;
