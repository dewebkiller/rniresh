'use client';

import React from "react";
import nireshProfile from "../images/niresh-shrestha-profile.png";
import InnerHeaderStyle2 from "./InnerHeaderStyle2";
import AboutSectionOne from "./AboutSectionOne";
import EducationExperience from "./EducationExperience";
import WorkProcess from "./WorkProcess";
import FAQ from "./FAQ";
import Footer from "./Footer";

const getSrc = (img) => typeof img === 'string' ? img : (img?.src || img);

function About(props) {
  const pagetitle = "About Me";
  const breadcrumbText = "Providing services for over 12 Years";
  const breadcrumbText1 = "Qualified & Experiened";
  const word1 = "";
  const word2 = "About";
  const typewriterStrings = [
    "Frontend Developer",
    "WordPress Developer",
    "Content Writer",
  ];
  return (
    <>
      <InnerHeaderStyle2
        Breadcrumbtext1={breadcrumbText}
        Breadcrumbtext2={breadcrumbText1}
        Typewriter={typewriterStrings}
        pagetitle={pagetitle}
        Word1={word1}
        Word2={word2}
      />
      <AboutSectionOne />
      <EducationExperience />
      <WorkProcess />
      <FAQ />
      <Footer />
    </>
  );
}
export default About;
