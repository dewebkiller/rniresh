import React  from "react";
import useDocumentTitle from './useDocumentTitle'
import InnerHeaderStyle2 from "./InnerHeaderStyle2";
import ServiceSectionOne from "./ServiceSectionOne";
import ServiceList from "./ServiceList";
import FAQ from "./FAQ";
import Footer from "./Footer";

function Services (props) {
  useDocumentTitle('Niresh Shrestha | Frontend developer, WordPress Developer| Freelance WordPress Developer Nepal')
  const pagetitle ="My Services";
  const breadcrumbText = "Providing services for over 12 Years";
  const breadcrumbText1 = "Qualified & Experiened";
  const word1 = "My"
  const word2 = "Services"
  const typewriterStrings = [
    "Frontend Developer",
    "WordPress Developer",
    "Content Writer",
  ];
  return (
    <>
    <InnerHeaderStyle2 Breadcrumbtext1={breadcrumbText} Breadcrumbtext2={breadcrumbText1} Typewriter={typewriterStrings} pagetitle={pagetitle} Word1={word1} Word2={word2} />
    <ServiceSectionOne />
    <ServiceList />
    <FAQ />
    <Footer />
    </>
  )
}
export default Services;