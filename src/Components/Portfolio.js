import React  from "react";
import InnerHeader from "./Innerheader";
import PortfolioSectionOne from "./PortfolioSectionOne";
import PortfolioList from "./PortfolioList";
import Footer from "./Footer";

function Portfolio (props) {
  const pagetitle ="Portfolio";
  const breadcrumbText = "Providing services for over 12 Years Portfolio";
  const breadcrumbText2 = "Awesome Projects";
  const typewriterStrings = [
    "Frontend Developer",
    "WordPress Developer",
    "Logo Design",
  ];
  return (
    <>
    <InnerHeader Breadcrumbtext1={breadcrumbText} Breadcrumbtext2={breadcrumbText2} Typewriter={typewriterStrings} pagetitle={pagetitle}/>
    <PortfolioSectionOne />
    <PortfolioList />
    <Footer />
    </>
  )
}
export default Portfolio;