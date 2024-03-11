import React  from "react";
import useDocumentTitle from './useDocumentTitle'
import InnerHeaderStyle2 from "./InnerHeaderStyle2";
import PortfolioSectionOne from "./PortfolioSectionOne";
import PortfolioList from "./PortfolioList";
import Footer from "./Footer";

function Portfolio (props) {
  useDocumentTitle('Niresh Shrestha | Portfolio- Awesome projects developed | Freelance WordPress Developer Nepal')
  const pagetitle ="My Portfolio";
  const breadcrumbText = "Providing services for over 12 Years";
  const breadcrumbText1 = "Qualified & Experiened";
  const word1 = "My"
  const word2 = "Works"
  const typewriterStrings = [
    "Frontend Developer",
    "WordPress Developer",
    "Content Writer",
  ];
  return (
    <>
   <InnerHeaderStyle2 Breadcrumbtext1={breadcrumbText} Breadcrumbtext2={breadcrumbText1} Typewriter={typewriterStrings} pagetitle={pagetitle} Word1={word1} Word2={word2} />
    <PortfolioSectionOne />
    <PortfolioList />
    <Footer />
    </>
  )
}
export default Portfolio;