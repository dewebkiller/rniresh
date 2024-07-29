import React  from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import InnerHeaderStyle2 from "./InnerHeaderStyle2";
import PortfolioSectionOne from "./PortfolioSectionOne";
import PortfolioListInner from "./PortfolioListInner";
import Footer from "./Footer";

function Portfolio (props) {
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
    <HelmetProvider>
    <Helmet>
  <title>Freelance WordPress Developer Nepal | Frontend developer | WordPress Developer  | Awesome Projects by Niresh Shrestha </title>
  <meta name="description" content="Niresh Shreastha is a skilled Freelance WordPress developer from Nepal and Frontend developer and  with a passion for creating visually stunning and highly functional websites."/>
  <meta name="keywords" content="Freelance WordPress Developer Nepal kathmandu, Frontend developer, WordPress Developer, Niresh Shrestha, Web Customization Services Kathmandu, Plugin Development "/>
</Helmet>
   <InnerHeaderStyle2 Breadcrumbtext1={breadcrumbText} Breadcrumbtext2={breadcrumbText1} Typewriter={typewriterStrings} pagetitle={pagetitle} Word1={word1} Word2={word2} />
    <PortfolioSectionOne />
    <PortfolioListInner />
    <Footer />
    </HelmetProvider>
    </>
  )
}
export default Portfolio;