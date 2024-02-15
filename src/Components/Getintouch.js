import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const Getintouch = () => {
  return (
    <section className="min-h-fit bg-bg_light_primary getintouch-section">
      <div className="container mx-auto">
        <div className="px-5 pt-20 pb-20">
          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-5"
              data-aos="fade-left"
            >
              <div
                data-aos="fade-left"
                className="max-w-sm sm:min-w-[22rem] aos-init aos-animate"
              >
                <h4 className="title" data-aos="fade-down">
                  What’s your story?
                </h4>
                <h4 className="subtitle" data-aos="fade-down">
                  Get in touch
                </h4>
                <p className="leading-7">
                  Always available for freelancing if the right project comes
                  along, Feel free to contact me.
                </p>
                <br />
                <div className="contact-info-wrapper">
                  <div
                    className="md:grid md:grid-cols-12 bg-white shadow-3xl rounded-2xl p-5 mt-5 mb-5 items-center"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <div className="justify-center  overflow-hidden bg-white md:col-span-3 lg:col-span-3 g-touch-icon-wrapper">
                      <div className="g-touch-icon">
                        <FontAwesomeIcon icon={faMapLocationDot} />
                      </div>
                    </div>
                    <div className="md:col-span-9 lg:col-span-9">
                      <p className="ml-10 font-medium text-gray-600 sm:text-xl">
                        Address
                      </p>
                      <em className="ml-10 text-gray-600 text-xs">
                        
                        Thankot, Kathmandu
                      </em>
                    </div>
                  </div>
                  <div
                    className="md:grid md:grid-cols-12 bg-white shadow-3xl rounded-2xl p-5 mt-5 mb-5 items-center"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <div className="justify-center  overflow-hidden bg-white md:col-span-3 lg:col-span-3 g-touch-icon-wrapper">
                      <div className="g-touch-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                    </div>
                    <div className="md:col-span-9 lg:col-span-9">
                      <p className="ml-10 font-medium text-gray-600 sm:text-xl">
                        Email
                      </p>
                      <em className="ml-10 text-gray-600 text-xs">
                        
                        dewebkiller@gmail.com
                      </em>
                    </div>
                  </div>
                  <div
                    className="md:grid md:grid-cols-12 bg-white shadow-3xl rounded-2xl p-5 mt-5 mb-5 items-center"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <div className="justify-center  overflow-hidden bg-white md:col-span-3 lg:col-span-3 g-touch-icon-wrapper">
                      <div className="g-touch-icon">
                        <FontAwesomeIcon icon={faMobileAlt} />
                      </div>
                    </div>
                    <div className="md:col-span-9 lg:col-span-9">
                      <p className="ml-10 font-medium text-gray-600 sm:text-xl">
                        Phone
                      </p>
                      <em className="ml-10 text-gray-600 text-xs">
                        9841786680
                      </em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-7">
              <div className="text-left md:grid md:grid-cols-12 md:gap-6">
                <div className="max-w-xl md:max-w-none md:w-full md:col-span-5 lg:col-span-12 md:col-span-12 lg:col-span-12">
                  <h4 className="subtitle" data-aos="fade-down">
                    Say something
                  </h4>
                    <div className="formwrapper">
                      <div className="md:grid md:grid-cols-12 md:gap-6 mt-5 mb-5 ">
                      <div className="lg:col-span-6 md:col-span-6 lg:col-span-6 ">
                      <input
                            type="text" placeholder="Full Name"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                        />
                      </div>
                      <div className="lg:col-span-6 md:col-span-6 lg:col-span-6">
                      <input
                            type="email" placeholder="Email"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                        />
                      </div>
                      </div>
                      <div className="md:grid md:grid-cols-12 md:gap-6 mt-5 mb-5 ">
                      <div className="lg:col-span-12 md:col-span-12 lg:col-span-12">
                      <input
                            type="text" placeholder="Subject"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                        />
                      </div>
                     
                      </div>
                      <div className="md:grid md:grid-cols-12 md:gap-6 mt-5 mb-5 ">
                      <div className="lg:col-span-12 md:col-span-12 lg:col-span-12">
                      <textarea  placeholder="Subject" rows={8}
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40">
                              </textarea>
                      </div>
                     
                      </div>
                      <div className="md:grid md:grid-cols-12 md:gap-6 mt-5 mb-5 ">
                      <div className="lg:col-span-12 md:col-span-12 lg:col-span-12">
                      <button className="btn bg-dark_primary text-white bg-sky-500/100">
                    Send Message
                  </button>
                      </div>
                     
                      </div>
                    
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Getintouch;
