import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import webdevelopmenticon from "../lottie/webdevelopment.png";
import webdevelopment from "../images/webdevelopment.jpeg";
function ServiceList(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container mx-auto pb-20">
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <div className="text-center">
            <h5
              className="btn-capsule aos-init aos-animate mb-5"
              data-aos="fade-down"
            >
              Services
            </h5>
            <h4 className="subtitle aos-init aos-animate" data-aos="fade-down">
              Education & Experience
            </h4>
          </div>
        </div>
        <div className="px-5 services-grid">
          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div className="md:grid md:grid-cols-12 service-wrapper icon service--style-1" data-aos="fade-right" data-aos-delay="200">
                <div className="lg:col-span-6">
                  <div className="img-wrap">
                    <img
                      width="300"
                      height="420"
                      src={webdevelopment}
                      alt="Deck & Pergolas"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption">
                    <img src={webdevelopmenticon} alt="Web Development" />
                      <h5>Web Development</h5>
                      <p>
                        Choosing the materials for your new outdoor living space
                        is a matter of achieving the right mix between
                        aesthetics and functionality.
                      </p>
                      <Link to="/about">Read More</Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div className="md:grid md:grid-cols-12 service-wrapper icon service--style-1" data-aos="fade-right" data-aos-delay="400">
                <div className="lg:col-span-6">
                  <div className="img-wrap">
                    <img
                      width="300"
                      height="420"
                      src={webdevelopment}
                      alt="Deck & Pergolas"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption">
                    <img src={webdevelopmenticon} alt="Web Development" />
                      <h5>WordPress Development</h5>
                      <p>
                        Choosing the materials for your new outdoor living space
                        is a matter of achieving the right mix between
                        aesthetics and functionality.
                      </p>
                      <Link to="/about">Read More</Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div className="md:grid md:grid-cols-12 service-wrapper icon service--style-1" data-aos="fade-right" data-aos-delay="200">
                <div className="lg:col-span-6">
                  <div className="img-wrap">
                    <img
                      width="300"
                      height="420"
                      src={webdevelopment}
                      alt="Deck & Pergolas"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption">
                    <img src={webdevelopmenticon} alt="Web Development" />
                      <h5>Woocommerce Development</h5>
                      <p>
                        Choosing the materials for your new outdoor living space
                        is a matter of achieving the right mix between
                        aesthetics and functionality.
                      </p>
                      <Link to="/about">Read More</Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div className="md:grid md:grid-cols-12 service-wrapper icon service--style-1" data-aos="fade-right" data-aos-delay="400">
                <div className="lg:col-span-6">
                  <div className="img-wrap">
                    <img
                      width="300"
                      height="420"
                      src={webdevelopment}
                      alt="Deck & Pergolas"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption">
                    <img src={webdevelopmenticon} alt="Web Development" />
                      <h5>Graphic Design</h5>
                      <p>
                        Choosing the materials for your new outdoor living space
                        is a matter of achieving the right mix between
                        aesthetics and functionality.
                      </p>
                      <Link to="/about">Read More</Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div className="md:grid md:grid-cols-12 service-wrapper icon service--style-1" data-aos="fade-right" data-aos-delay="200">
                <div className="lg:col-span-6">
                  <div className="img-wrap">
                    <img
                      width="300"
                      height="420"
                      src={webdevelopment}
                      alt="Deck & Pergolas"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption">
                    <img src={webdevelopmenticon} alt="Web Development" />
                      <h5>Content Writting</h5>
                      <p>
                        Choosing the materials for your new outdoor living space
                        is a matter of achieving the right mix between
                        aesthetics and functionality.
                      </p>
                      <Link to="/about">Read More</Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div className="md:grid md:grid-cols-12 service-wrapper icon service--style-1" data-aos="fade-right" data-aos-delay="400">
                <div className="lg:col-span-6">
                  <div className="img-wrap">
                    <img
                      width="300"
                      height="420"
                      src={webdevelopment}
                      alt="Deck & Pergolas"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption">
                    <img src={webdevelopmenticon} alt="Web Development" />
                      <h5>UI/UX</h5>
                      <p>
                        Choosing the materials for your new outdoor living space
                        is a matter of achieving the right mix between
                        aesthetics and functionality.
                      </p>
                      <Link to="/about">Read More</Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ServiceList;
