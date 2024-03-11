import React  from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import InnerHeaderStyle2 from "./InnerHeaderStyle2";
import Getintouch from "./Getintouch";
import Footer from "./Footer";

function Contact (props) {
  const pagetitle ="Contact";
  const breadcrumbText = "Providing services for over 12 Years";
  const breadcrumbText1 = "Qualified & Experiened";
  const word1 = "Contact"
  const word2 = "Me"
  const typewriterStrings = [
    "Frontend Developer",
    "WordPress Developer",
    "Content Writer",
  ];
  return (
    <>
    <HelmetProvider>
    <Helmet>
  <title>Niresh Shrestha | Hire Freelance WordPress Developer Nepal</title>
  <meta name="description" content="Niresh Shreastha is a skilled frontend developer and WordPress developer with a passion for creating visually stunning and highly functional websites."/>
  <meta name="keywords" content="Niresh Shrestha, Frontend developer, WordPress Developer, Freelance WordPress Developer Nepal kathmandu, Web Customization Services Kathmandu "/>
</Helmet>
   <InnerHeaderStyle2 Breadcrumbtext1={breadcrumbText} Breadcrumbtext2={breadcrumbText1} Typewriter={typewriterStrings} pagetitle={pagetitle} Word1={word1} Word2={word2} />
    <Getintouch />
    <Footer />
    </HelmetProvider>
    </>
  )
}
export default Contact;