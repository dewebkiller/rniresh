import React from "react";
import { Helmet } from "react-helmet-async";
import InnerHeaderStyle2 from "./InnerHeaderStyle2";
import Getintouch from "./Getintouch";
import Footer from "./Footer";

function Contact(props) {
  const pagetitle = "Contact";
  const breadcrumbText = "Providing services for over 12 Years";
  const breadcrumbText1 = "Qualified & Experiened";
  const word1 = "";
  const word2 = "Contact";
  const typewriterStrings = [
    "Frontend Developer",
    "WordPress Developer",
    "Content Writer",
  ];
  return (
    <>
        <Helmet>
          <title>
            Freelance WordPress Developer Nepal | Frontend developer | Services
            Provided by Niresh Shrestha{" "}
          </title>
          <meta
            name="description"
            content="Niresh Shreastha is a skilled Freelance WordPress developer from Nepal and Frontend developer and  with a passion for creating visually stunning and highly functional websites."
          />
          <meta
            name="keywords"
            content="Freelance WordPress Developer Nepal kathmandu, Frontend developer, WordPress Developer, Niresh Shrestha, Web Customization Services Kathmandu, Plugin Development "
          />
        </Helmet>
        <InnerHeaderStyle2
          Breadcrumbtext1={breadcrumbText}
          Breadcrumbtext2={breadcrumbText1}
          Typewriter={typewriterStrings}
          pagetitle={pagetitle}
          Word1={word1}
          Word2={word2}
        />
        <Getintouch />
        <Footer />
    </>
  );
}
export default Contact;
