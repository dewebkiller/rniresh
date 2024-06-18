import React, { useEffect } from "react";
import AOS from "aos";
import wordpressdevelopment from  "../images/thumbnail-wordpress-development.jpg";
import woocommercedevelopment from "../images/thumbnail-woocommerce-development.jpg";
import webdesign from "../images/webdesign.jpg";
import graphicdesign from "../images/graphicdesign.jpg";
import contentwritting from "../images/content-writing.jpg";
import uiux from "../images/ui-ux.jpg";
import wordpressdevelopmenticon from  "../images/wordpress.png";
import woocommerceicon from "../images/woocommerce.png";
import webdesignicon from "../images/web-design-icon.png";
import  graphicdesignicon from "../images/graphic-design-icon.png";
import uiixicon from "../images/ui-ux-icon.png";
import contentwrittingicon from "../images/content-writting-icon.png";
function ServiceList(props) {
  useEffect(() => {
    AOS.init(
      {
        disable: 'mobile',
      }
    );
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
            My Professional Services
            </h4>
          </div>
        </div>
        <div className="px-5 services-grid">
          <div className="md:grid md:grid-cols-12 md:gap-6">
            
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div className="md:grid md:grid-cols-12 service-wrapper icon service--style-1" data-aos="fade-right" data-aos-delay="400">
                <div className="lg:col-span-6">
                  <div className="img-wrap">
                    <img
                      width="300"
                      height="420"
                      src={wordpressdevelopment}
                      alt="WordPress Development"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption">
                    <img src={wordpressdevelopmenticon} alt="WordPress Development" />
                      <h5>WordPress Development</h5>
                      <ul>
                        <li>- PSD/Sketch/AI to WordPress</li>
                        <li>- Theme development</li>
                        <li>- Plugin development</li>
                        <li>- Theme and plugin customization</li>
                        <li>- Bug and error fixing</li>
                        <li>- Speed Optimization</li>
                        </ul>
                      
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
                      src={woocommercedevelopment}
                      alt="Woocommerce Development"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption">
                    <img src={woocommerceicon} alt="Web Development" />
                      <h5>Woocommerce </h5>
                      <ul>
                        <li>- Online store</li>
                        <li>- Facebook store to woocommerce</li>
                        <li>- Payment integration</li>
                        <li>- Custom theme</li>
                        <li>- Checkout page customization</li>
                        <li>- Speed Optimization</li>
                        </ul>
                      
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
                      src={webdesign}
                      alt="Web Design"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption">
                    <img src={webdesignicon} alt="Web design" />
                      <h5>Web Design </h5>
                      <ul>
                        <li>- Responsive web design</li>
                        <li>- Fully customized web design</li>
                        <li>- PSD/Sketch/AI to WordPress</li>
                        <li>- Bug Fixing and speed optimization</li>
                        <li>- Custom site</li>
                        <li>- WordPress development</li>
                        </ul>
                      
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
                      src={uiux}
                      alt="UI/UX"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption">
                    <img src={uiixicon} alt="Web Development" />
                      <h5>UI/UX</h5>
                      <ul>
                        <li>- Mobile App Prototype</li>
                        <li>- Web Mockup</li>
                        <li>- User-Friendly Layout</li>
                        <li>- Clear Navigation</li>
                        <li>- Visual Appeal</li>
                        <li>- Testing and Improving</li>
                        </ul>
                      
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
                      src={graphicdesign}
                      alt="Graphic Design"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption">
                    <img src={graphicdesignicon} alt="Web Development" />
                      <h5>Graphic Design</h5>
                      <ul>
                        <li>- Logo design</li>
                        <li>- Business card</li>
                        <li>- Flyers, Brochures</li>
                        <li>- Email marketing templates</li>
                        <li>- Social media post</li>
                        <li>- Advertisement banners</li>
                        </ul>
                      
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
                      src={contentwritting}
                      alt="Content Writting"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="services-wrap">
                    <div className="services-caption">
                    <img src={contentwrittingicon} alt="Web Development" />
                      <h5>Content Writting</h5>
                      <ul>
                        <li>- Technical Writing</li>
                        <li>- Content Translation</li>
                        <li>- Creative Content Writing</li>
                        <li>- Website Content Writing</li>
                        <li>- Brochure Writing</li>
                        <li>- SEO Copy Writing</li>
                        </ul>
                      
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
