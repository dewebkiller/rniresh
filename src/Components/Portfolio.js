import React from "react";
import { Helmet } from "react-helmet-async";
import nireshProfile from "../images/niresh-shrestha-profile.png";
import InnerHeaderStyle2 from "./InnerHeaderStyle2";
import PortfolioSectionOne from "./PortfolioSectionOne";
import PortfolioListInner from "./PortfolioListInner";
import Footer from "./Footer";

function Portfolio(props) {
  const pagetitle = "My Portfolio";
  const breadcrumbText = "Providing services for over 12 Years";
  const breadcrumbText1 = "Qualified & Experiened";
  const word1 = "";
  const word2 = "Works";
  const typewriterStrings = [
    "Frontend Developer",
    "WordPress Developer",
    "Content Writer",
  ];
  return (
    <>
      <Helmet>
        <title>
          Freelance WordPress Developer Nepal | Frontend developer | WordPress
          Developer | Awesome Projects by Niresh Shrestha{" "}
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
            "@type": "CollectionPage",
            name: "Portfolio – Niresh Shrestha",
            url: "https://nireshh.com.np/portfolio",
            description:
              "Explore the portfolio of Niresh Shrestha — a freelance WordPress developer and frontend developer from Kathmandu, Nepal showcasing web design and development projects.",
            author: {
              "@type": "Person",
              name: "Niresh Shrestha",
              url: "https://nireshh.com.np",
              image: `${window.location.origin}${nireshProfile}`,
              jobTitle: "Freelance WordPress Developer & Frontend Developer",
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
            },
            about: [
              { "@type": "Thing", name: "WordPress Development" },
              { "@type": "Thing", name: "Frontend Development" },
              { "@type": "Thing", name: "Web Design" },
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
      <PortfolioSectionOne />
      <PortfolioListInner />
      <Footer />
    </>
  );
}
export default Portfolio;
