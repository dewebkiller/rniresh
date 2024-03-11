import React  from "react";
import useDocumentTitle from './useDocumentTitle'
import InnerHeaderStyle2 from "./InnerHeaderStyle2";
import AboutSectionOne from "./AboutSectionOne";
import EducationExperience from "./EducationExperience";
import WorkProcess from "./WorkProcess";
import FAQ from "./FAQ";
import Footer from "./Footer";

function About (props) {
  useDocumentTitle('Niresh Shrestha | Frontend developer, WordPress Developer| Freelance WordPress Developer Nepal')
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
    <InnerHeaderStyle2 Breadcrumbtext1={breadcrumbText} Breadcrumbtext2={breadcrumbText1} Typewriter={typewriterStrings} pagetitle={pagetitle} Word1={word1} Word2={word2} />
    <AboutSectionOne />
    <EducationExperience />
    <WorkProcess />
    <FAQ />
    <Footer />
    </>
  )
}
export default About;