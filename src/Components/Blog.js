import React  from "react";
import InnerHeaderStyle2 from "./InnerHeaderStyle2";
import PortfolioSectionOne from "./PortfolioSectionOne";
import BlogSection from "./BlogSection";
import Footer from "./Footer";

function Blog (props) {
  const pagetitle ="Blog";
  const breadcrumbText = "Providing services for over 12 Years";
  const breadcrumbText1 = "Qualified & Experiened";
  const word1 = "My"
  const word2 = "Blog"
  const typewriterStrings = [
    "Frontend Developer",
    "WordPress Developer",
    "Content Writer",
  ];
  return (
    <>
   <InnerHeaderStyle2 Breadcrumbtext1={breadcrumbText} Breadcrumbtext2={breadcrumbText1} Typewriter={typewriterStrings} pagetitle={pagetitle} Word1={word1} Word2={word2} />
    <PortfolioSectionOne />
    <BlogSection />
    <Footer />
    </>
  )
}
export default Blog;