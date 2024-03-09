import React from "react";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blogsingle.jpeg";
import author from "../images/author.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import SectionTags from "./SectionTags";
import AuthorInfo from "./AuthorInfo";
import RelatedPosts from "./RelatedPosts";
function BlogContent(props) {
  return (
    <>
      <div className="container mx-auto pb-20">
        <div className="md:grid md:grid-cols-12 md:gap-6">
          <div className="md:col-span-2 lg:col-span-2 hidden lg:block"></div>
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-8 lg:col-span-8 Blogsingle-wrapper">
            <img src={Thumbnail} alt="" className="thumbnail" />
            <div className="author-top flex justify-between items-end pb-2 mb-5">
              <div className="author-left  md:gap-6 flex justify-between">
                <div className="author-thumbnail">
                  <img src={author} alt="Authos" />
                </div>
                <div className="author-details">
                  <h6>Niresh shrestha</h6>
                  <p>Passionate blogger</p>
                </div>
              </div>
              <div className="autho-right">
                <p>
                  <FontAwesomeIcon icon={faCalendar} /> Feb 24, 2024
                </p>
              </div>
            </div>

            <p>
            AI is transforming the way we work, learn, and create. Whether you are a business owner, a student, a developer, or a content creator, you can benefit from using AI tools that can help you automate, generate, and collaborate on various tasks and projects. In this blog post, we will introduce you to 10 AI tools that you need to know. These tools are easy to use, affordable, and powerful, and they can help you save time, resources, and effort in you next project. It may be about web design resources or any of your fields.
            </p>
            <blockquote class="relative border-s-4 ps-4 sm:ps-6 dark:border-gray-700 bg-bg_light_primary p-5 mb-5">
  <p class="text-gray-800 sm:text-xl mb-0"><em>
    I just wanted to say that I'm very happy with my purchase so far. The documentation is outstanding - clear and detailed.
  </em></p>
</blockquote>
<p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit
              </p>
            <h2>
            1. Tango.us
            </h2>
            <p>
            Tango.us is a free extension that automatically documents and turns any process into a step-by-step interactive walkthrough. You can share your guides with your team, get feedback, and track their usage and improvement. Tango.us integrates with your favorite tools and helps you create how-to guides in minutes. Whether you want to onboard new employees, train customers, or document workflows, Tango.us can help you do it faster and better. 
            </p>
            <Link to={'/'} className="button-visitesite">Visite site</Link>
            <img src={Thumbnail} alt="" className="content-image" />
            
            <h2>
              Creating Outstanding Design to Boost Your Digital Experience.
            </h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
            <h2>  Conclusion </h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
            <SectionTags />
            <AuthorInfo />
          </div>
        </div>
      </div>
      <RelatedPosts />
    </>
  );
}
export default BlogContent;
