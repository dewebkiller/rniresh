'use client';

import React, { useEffect, useState } from "react";

function BlogSection(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        // Using direct non-www domain to eliminate 301 redirect delays
        const response = await fetch(
          "https://dewebkiller.com/wp-json/wp/v2/posts?_embed&per_page=6",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const postsData = await response.json();
        setPosts(postsData);
      } catch (err) {
        console.error("Error loading posts:", err);
        setError("Unable to load latest blog posts at this time.");
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  // Function to format date safely
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  return (
    <section className="min-h-fit blog-section">
      <div className="px-5 py-20">
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <div className="text-center">
            <h2 className="title" data-aos="fade-down">
              Blog
            </h2>
            <h4 className="subtitle" data-aos="fade-down">
              Latest and trending updates
            </h4>
          </div>
        </div>
        <div className="container flex flex-wrap gap-6 justify-center mx-auto">
          {loading ? (
            // Skeleton Loader Cards for Faster Perceived Performance
            Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="w-full max-w-sm bg-white border rounded-lg shadow animate-pulse blog-content-wrapper p-4"
              >
                <div className="h-48 bg-gray-200 rounded-t-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            ))
          ) : error ? (
            <div className="text-center text-gray-500 py-10">
              <p>{error}</p>
            </div>
          ) : (
            posts.map((post, index) => {
              const featuredImg =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

              return (
                <div
                  key={post.id || index}
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 100}
                  className="max-w-sm bg-white border rounded-lg shadow blog-content-wrapper flex flex-col justify-between"
                >
                  <div className="blog-content-top">
                    {featuredImg && (
                      <a href={post.link} target="_blank" rel="noreferrer">
                        <img
                          className="rounded-t-lg blogthumnail w-full object-cover"
                          src={featuredImg}
                          alt={post.title?.rendered ? post.title.rendered.replace(/<[^>]+>/g, '') : "Blog post"}
                        />
                      </a>
                    )}
                    <div className="p-5">
                      <ul className="flex flex-wrap justify-between text-sm mb-3">
                        <li className="dark:text-gray-400 font-medium">Niresh Shrestha</li>
                        <li className="dark:text-gray-400">
                          {formatDate(post.date)}
                        </li>
                      </ul>
                      <a href={post.link} target="_blank" rel="noreferrer">
                        <h5
                          className="my-3 font-bold text-lg hover:text-pink-600 transition-colors"
                          dangerouslySetInnerHTML={{ __html: post.title?.rendered || "" }}
                        />
                      </a>
                      <div
                        className="my-5 font-normal text-gray-700 dark:text-gray-400 text-sm line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered || "" }}
                      />
                    </div>
                  </div>
                  <div className="blog-content-bottom border-t">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center p-5 text-base font-medium text-pink-600 hover:text-pink-800 transition-colors"
                    >
                      Read Full Post
                      <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
