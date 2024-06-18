import React, { useEffect, useState } from 'react';

function BlogSection(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch('https://www.dewebkiller.com/wp-json/wp/v2/posts?_embed&per_page=3');
        
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const postsData = await response.json();
        setPosts(postsData);
      } catch (error) {
        console.error('Error loading posts:', error);
        // Handle the error, such as showing a message to the user
      }
      
    }

    loadPosts();
  }, []);
// Function to format date
const formatDate = (dateString) => {
  const options = { day: '2-digit', month: 'long', year: 'numeric' };
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleDateString('en-US', { month: 'short' });
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
        <div className="container flex flex-wrap gap-4 justify-center mx-auto">
          {posts.map((post, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay="300"
              className="max-w-sm bg-white border rounded-lg shadow blog-content-wrapper"
            >
              <div className='blog-content-top'>
              <a href={post.link} target="_blank" rel="noreferrer">
                <img
                  className="rounded-t-lg blogthumnail"
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  
                  alt=""
                />
              </a>
              <div className="p-5">
                <ul className="flex flex-wrap justify-between">
                  <li className="dark:text-gray-400">
                    Niresh Shrestha
                  </li>
                  <li className="dark:text-gray-400">
               
                  {formatDate(post.date)}</li>
                </ul>
                <a href={post.link} target="_blank" rel="noreferrer">
                  <h5 className="my-3 font-bold" dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
                </a>
                <p className="my-5 font-normal text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
                
              </div>
              </div>
              <div className='blog-content-bottom'>
              <a
                  href={post.link} target="_blank" rel="noreferrer"
                  className="inline-flex items-center p-5 text-lg font-medium text-center"
                >
                  Read more
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
