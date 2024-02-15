import React  from "react";
import InnerHeader from "./Innerheader";
import ServiceSectionOne from "./ServiceSectionOne";
import ServiceList from "./ServiceList";
import FAQ from "./FAQ";
import Footer from "./Footer";

function Services (props) {
  const pagetitle ="Services";
  const breadcrumbText = "Providing services for over 12 Years Services";
  const breadcrumbText2 = "What I offer";
  const typewriterStrings = [
    "Web Development",
    "frontend Development",
    "Theme Development",
    "Plugin Development",
    "WooCommerce Development",
  ];
  return (
    <>
    <InnerHeader Breadcrumbtext1={breadcrumbText} Breadcrumbtext2={breadcrumbText2} Typewriter={typewriterStrings} pagetitle={pagetitle}/>
    <ServiceSectionOne />
    <ServiceList />
    <FAQ />
    <Footer />
    </>
  )
}
export default Services;