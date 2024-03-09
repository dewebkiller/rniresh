import React from "react";
import author from "../images/author.webp";
import ButtonComp from  './ButtonComp';
function AuthorInfo (props) {
  const Btntext = "View All Post";
    //const FAicon =  "fa-download";
  return (
    
  <>
  <div
                    className="md:grid md:grid-cols-12 bg-white shadow-3xl rounded-2xl p-5 mt-5 mb-5 items-center"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <div className="justify-center  overflow-hidden bg-white md:col-span-3 lg:col-span-3 g-touch-icon-wrapper">
                      <div className="g-touch-icon">
                      <img src={author} alt="Authos"/>
                      </div>
                    </div>
                    <div className="md:col-span-9 lg:col-span-9">
                      <p className="ml-10 font-medium text-gray-600 sm:text-xl">
                        Niresh shrestha
                      </p>
                      <p className="ml-10 text-gray-600 text-xs">
                        
                      The Tech Guy with 10+ years of experience in web design and development. I write posts mostly about WordPress and other web and internet related stuffs. I love sharing my knowledge with the community. Here I'll be talking about everything about designing and tech related content. Your support would mean a lot to me!
                      </p>
                      <div className="page-titles-wrap  btn-wrapper">
                        <div className="btn-dark ml-10" >
            <ButtonComp Btntext={Btntext} />
            </div>
            </div>
                    </div>
                  </div>
  </>
  )
}
export default AuthorInfo;