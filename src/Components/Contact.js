import React  from "react";
import InnerHeader from "./Innerheader";
import Getintouch from "./Getintouch";
import Footer from "./Footer";

function Contact (props) {
  const pagetitle ="Contact";
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
    <Getintouch />
    <Footer />
    </>
  )
}
export default Contact;