import React from "react";
import { Helmet } from "react-helmet-async";
import nireshProfile from "../images/niresh-shrestha-profile.png";
import InnerHeaderStyle2 from "./InnerHeaderStyle2";
import ServiceSectionOne from "./ServiceSectionOne";
import ServiceList from "./ServiceList";
import FAQ from "./FAQ";
import Footer from "./Footer";

function Services(props) {
  const pagetitle = "My Services";
  const breadcrumbText = "Providing services for over 15 Years";
  const breadcrumbText1 = "Qualified & Experiened";
  const word1 = "";
  const word2 = "Services";
  const typewriterStrings = [
    "Frontend Developer",
    "WordPress Developer",
    "Content Writer",
  ];
  return (
    <>
        <Helmet>
          <title>
            Niresh Shrestha | Frontend developer, WordPress Developer| Freelance
            WordPress Developer Nepal
          </title>
          <meta
            name="description"
            content="Niresh Shreastha is a skilled frontend developer and WordPress developer with a passion for creating visually stunning and highly functional websites."
          />
          <meta
            name="keywords"
            content="Niresh Shrestha, Frontend developer, WordPress Developer, Freelance WordPress Developer Nepal kathmandu, Web Customization Services Kathmandu "
          />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Niresh Shrestha – Web Development Services",
              url: "https://nireshh.com.np/services",
              image: `${window.location.origin}${nireshProfile}`,
              description:
                "Niresh Shrestha offers freelance WordPress development, frontend development, and content writing services from Kathmandu, Nepal.",
              provider: {
                "@type": "Person",
                name: "Niresh Shrestha",
                url: "https://nireshh.com.np",
                sameAs: [
                  "https://www.linkedin.com/in/dewebkiller/",
                  "https://github.com/dewebkiller",
                  "https://codepen.io/dewebkiller/",
                  "https://dribbble.com/dewebkiller/",
                  "https://youtube.com/@dewebkiller",
                ],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kathmandu",
                addressCountry: "NP",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Web Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "WordPress Development",
                      description:
                        "Custom WordPress website development, theme customization, and plugin development.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Frontend Development",
                      description:
                        "Responsive, modern UI development using HTML, CSS, JavaScript, and React.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Content Writing",
                      description:
                        "SEO-friendly content writing for blogs, websites, and digital marketing.",
                    },
                  },
                ],
              },
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
        <ServiceSectionOne />
        <ServiceList />
        <FAQ />
        <Footer />
    </>
  );
}
export default Services;
