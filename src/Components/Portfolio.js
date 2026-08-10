'use client';

import React from "react";
import nireshProfile from "../images/niresh-shrestha-profile.png";
import InnerHeaderStyle2 from "./InnerHeaderStyle2";
import PortfolioSectionOne from "./PortfolioSectionOne";
import PortfolioListInner from "./PortfolioListInner";
import Footer from "./Footer";

function Portfolio(props) {
  const pagetitle = "My Portfolio";
  const breadcrumbText = "Providing services for over 12 Years";
  const breadcrumbText1 = "Qualified & Experiened";
  const word1 = "";
  const word2 = "Works";
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
      <PortfolioSectionOne />
      <PortfolioListInner />
      <Footer />
    </>
  );
}
export default Portfolio;
