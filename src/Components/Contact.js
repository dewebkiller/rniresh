import React  from "react";
import InnerHeaderStyle2 from "./InnerHeaderStyle2";
import Getintouch from "./Getintouch";
import Footer from "./Footer";

function Contact (props) {
  const pagetitle ="Contact";
  const breadcrumbText = "Providing services for over 12 Years";
  const breadcrumbText1 = "Qualified & Experiened";
  const word1 = "Contact"
  const word2 = "Me"
  const typewriterStrings = [
    "Frontend Developer",
    "WordPress Developer",
    "Content Writer",
  ];
  return (
    <>
   <InnerHeaderStyle2 Breadcrumbtext1={breadcrumbText} Breadcrumbtext2={breadcrumbText1} Typewriter={typewriterStrings} pagetitle={pagetitle} Word1={word1} Word2={word2} />
    <Getintouch />
    <Footer />
    </>
  )
}
export default Contact;