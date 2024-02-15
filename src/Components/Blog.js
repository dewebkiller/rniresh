import React  from "react";
import InnerHeader from "./Innerheader";
import PortfolioSectionOne from "./PortfolioSectionOne";
import BlogSection from "./BlogSection";
import Footer from "./Footer";

function Blog (props) {
  const pagetitle ="Blog";
  const breadcrumbText = "Providing services for over 12 Years Blog";
  const breadcrumbText2 = "Awesome Projects";
  const typewriterStrings = [
    "Trending",
    "News",
    "updates",
  ];
  return (
    <>
    <InnerHeader Breadcrumbtext1={breadcrumbText} Breadcrumbtext2={breadcrumbText2} Typewriter={typewriterStrings} pagetitle={pagetitle}/>
    <PortfolioSectionOne />
    <BlogSection />
    <Footer />
    </>
  )
}
export default Blog;