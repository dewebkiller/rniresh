import React  from "react";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import BlogExcerpt from "./BlogExceprt";
import Footer from "./Footer";

function SinglePage (props) {
  const pagetitle ="Top 10 AI Tools You Need to Know in 2024";
  const breadcrumbText = "Providing services for over 12 Years about";
  const breadcrumbText2 = "Qualified & Experiened";
  const typewriterStrings = [
    "Frontend Developer",
    "WordPress Developer",
    "Content Writer",
  ];
  return (
    <>
    <BlogHeader Breadcrumbtext1={breadcrumbText} Breadcrumbtext2={breadcrumbText2} Typewriter={typewriterStrings} pagetitle={pagetitle}/>
    <BlogExcerpt />
    <BlogContent />
    <Footer />
    </>
  )
}
export default SinglePage;