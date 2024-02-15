import React  from "react";
import InnerHeader from "./Innerheader";
import AboutSectionOne from "./AboutSectionOne";
import EducationExperience from "./EducationExperience";
import WorkProcess from "./WorkProcess";
import FAQ from "./FAQ";
import Footer from "./Footer";

function About (props) {
  const pagetitle ="About Me";
  const breadcrumbText = "Providing services for over 12 Years about";
  const breadcrumbText2 = "Qualified & Experiened";
  const typewriterStrings = [
    "Frontend Developer",
    "WordPress Developer",
    "Content Writer",
  ];
  return (
    <>
    <InnerHeader Breadcrumbtext1={breadcrumbText} Breadcrumbtext2={breadcrumbText2} Typewriter={typewriterStrings} pagetitle={pagetitle}/>
    <AboutSectionOne />
    <EducationExperience />
    <WorkProcess />
    <FAQ />
    <Footer />
    </>
  )
}
export default About;