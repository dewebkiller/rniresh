import React from "react";
import { Helmet } from "react-helmet-async";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import BlogExcerpt from "./BlogExceprt";
import Footer from "./Footer";

function SinglePage(props) {
  const pagetitle = "Top 10 AI Tools You Need to Know in 2024";
  const breadcrumbText = "Providing services for over 12 Years about";
  const breadcrumbText2 = "Qualified & Experiened";
  const typewriterStrings = [
    "Frontend Developer",
    "WordPress Developer",
    "Content Writer",
  ];
  return (
    <>
      <Helmet>
        <title>
          Top 10 AI Tools You Need to Know in 2024 | Niresh Shrestha
        </title>
        <meta
          name="description"
          content="Discover the top 10 AI tools you need to know in 2024. Read this blog post by Niresh Shrestha."
        />
        <meta
          name="keywords"
          content="AI Tools, 2024, Artificial Intelligence, Blog, Niresh Shrestha, WordPress Developer"
        />
      </Helmet>
      <BlogHeader
        Breadcrumbtext1={breadcrumbText}
        Breadcrumbtext2={breadcrumbText2}
        Typewriter={typewriterStrings}
        pagetitle={pagetitle}
      />
      <BlogExcerpt />
      <BlogContent />
      <Footer />
    </>
  );
}
export default SinglePage;
