import React  from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import InnerHeaderStyle2 from "./InnerHeaderStyle2";
import AboutSectionOne from "./AboutSectionOne";
import EducationExperience from "./EducationExperience";
import WorkProcess from "./WorkProcess";
import FAQ from "./FAQ";
import Footer from "./Footer";

function About (props) {
  const pagetitle ="About Me";
  const breadcrumbText = "Providing services for over 12 Years";
  const breadcrumbText1 = "Qualified & Experiened";
  const word1 = "About"
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
    <title>Niresh Shrestha | Freelance WordPress Developer Nepal | Frontend developer, WordPress Developer </title>
  <meta name="description" content="Niresh Shreastha is a skilled frontend developer and Freelance WordPress developer with a passion for creating visually stunning and highly functional websites."/>
  <meta name="keywords" content="Niresh Shrestha, Frontend developer, WordPress Developer, Freelance WordPress Developer Nepal kathmandu, Web Customization Services Kathmandu, Plugin Development "/>
</Helmet>
    <InnerHeaderStyle2 Breadcrumbtext1={breadcrumbText} Breadcrumbtext2={breadcrumbText1} Typewriter={typewriterStrings} pagetitle={pagetitle} Word1={word1} Word2={word2} />
    <AboutSectionOne />
    <EducationExperience />
    <WorkProcess />
    <FAQ />
    <Footer />
    </HelmetProvider>
    </>
  )
}
export default About;