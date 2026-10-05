"use client";

import React from "react";
import nireshProfile from "../../images/niresh-shrestha-profile.png";
import InnerHeaderStyle2 from "../layout/InnerHeaderStyle2";
import ServiceSectionOne from "./ServiceSectionOne";
import ServiceList from "./ServiceList";
import FeaturedAiVideoService from "./FeaturedAiVideoService";
import FAQ from "../common/FAQ";
import Footer from "../layout/Footer";

function Services(props) {
  const pagetitle = "My Services";
  const breadcrumbText = "Providing services for over 15 Years";
  const breadcrumbText1 = "Qualified & Experiened";
  const word1 = "";
  const word2 = "Services";
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
      <ServiceSectionOne />
      <FeaturedAiVideoService />
      <ServiceList />
      <FAQ />
      <Footer />
    </>
  );
}
export default Services;
