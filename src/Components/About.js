import React from "react";
import { Helmet } from "react-helmet-async";
import nireshProfile from "../images/niresh-shrestha-profile.png";
import InnerHeaderStyle2 from "./InnerHeaderStyle2";
import AboutSectionOne from "./AboutSectionOne";
import EducationExperience from "./EducationExperience";
import WorkProcess from "./WorkProcess";
import FAQ from "./FAQ";
import Footer from "./Footer";

function About(props) {
  const pagetitle = "About Me";
  const breadcrumbText = "Providing services for over 12 Years";
  const breadcrumbText1 = "Qualified & Experiened";
  const word1 = "";
  const word2 = "About";
  const typewriterStrings = [
    "Frontend Developer",
    "WordPress Developer",
    "Content Writer",
  ];
  return (
    <>
      <Helmet>
        <title>
          Freelance WordPress Developer Nepal | About Niresh Shrestha{" "}
        </title>
        <meta
          name="description"
          content="Niresh Shreastha is a skilled Freelance WordPress developer from Nepal and Frontend developer and  with a passion for creating visually stunning and highly functional websites."
        />
        <meta
          name="keywords"
          content="Freelance WordPress Developer Nepal kathmandu, Frontend developer, WordPress Developer, Niresh Shrestha, Web Customization Services Kathmandu, Plugin Development "
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Niresh Shrestha",
            url: "https://nireshh.com.np",
            image: `${window.location.origin}${nireshProfile}`,
            jobTitle: "Freelance WordPress Developer & Frontend Developer",
            description:
              "Niresh Shrestha is a skilled Freelance WordPress developer from Nepal and Frontend developer with a passion for creating visually stunning and highly functional websites.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kathmandu",
              addressCountry: "NP",
            },
            sameAs: [
              "https://www.linkedin.com/in/dewebkiller/",
              "https://github.com/dewebkiller",
              "https://codepen.io/dewebkiller/",
              "https://dribbble.com/dewebkiller/",
              "https://youtube.com/@dewebkiller",
            ],
            knowsAbout: [
              "WordPress Development",
              "Frontend Development",
              "Content Writing",
              "Web Design",
              "Plugin Development",
            ],
          })}
        </script>
      </Helmet>
      <InnerHeaderStyle2
        Breadcrumbtext1={breadcrumbText}
        Breadcrumbtext2={breadcrumbText1}
        Typewriter={typewriterStrings}
        pagetitle={pagetitle}
        Word1={word1}
        Word2={word2}
      />
      <AboutSectionOne />
      <EducationExperience />
      <WorkProcess />
      <FAQ />
      <Footer />
    </>
  );
}
export default About;
