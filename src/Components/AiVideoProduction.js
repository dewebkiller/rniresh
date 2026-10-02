import React from "react";
import InnerHeaderStyle2 from "./InnerHeaderStyle2";
import AiVideoSectionOne from "./AiVideoSectionOne";
import AiVideoProblemSolution from "./AiVideoProblemSolution";
import AiVideoServiceList from "./AiVideoServiceList";
import AiVideoWorkProcess from "./AiVideoWorkProcess";
import AiVideoFAQ from "./AiVideoFAQ";
import AiVideoCTA from "./AiVideoCTA";
import Footer from "./Footer";

function AiVideoProduction(props) {
  const pagetitle = "AI Video Production";
  const breadcrumbText = "Providing services for over 2 Years";
  const breadcrumbText1 = "Qualified & Experiened";
  const word1 = "";
  const word2 = "AI Video Production";
  const typewriterStrings = ["AI Video Production"];
  return (
    <>
      <InnerHeaderStyle2
        Breadcrumbtext1={breadcrumbText}
        Breadcrumbtext2={breadcrumbText1}
        Typewriter={typewriterStrings}
        pagetitle={pagetitle}
        Word1={word1}
        Word2={word2}
      />
      <AiVideoSectionOne />
      <AiVideoProblemSolution />
      <AiVideoServiceList />
      <AiVideoWorkProcess />
      <AiVideoFAQ />
      <AiVideoCTA />
      <Footer />
    </>
  );
}

export default AiVideoProduction;
