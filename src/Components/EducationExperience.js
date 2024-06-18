import React, { useEffect } from "react";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
function EducationExperience(props) {
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
            <h5 className="btn-capsule aos-init aos-animate mb-5" data-aos="fade-down">
              Resume
            </h5>
            <h3 className="subtitle aos-init aos-animate" data-aos="fade-down">
              Education & Experience
            </h3>
          </div>
        </div>
        <div className="px-5">
          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div className="timeline-wrapper timeline icon timeline--style-1" >
                <h5 className="timeline__title" data-aos="fade-down">
                  {" "}
                  Education{" "}
                </h5>
                <ul>
                  <li>
                    <div className="timeline__item" data-aos="fade-right">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon"><FontAwesomeIcon icon={faStarOfLife} /></div>
                        <h6 className="timeline__item__title">
                          Web Design
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Arena Multimedia | Kathmandu
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="imeline__item__description">
                          Learnt the professional Web design from the Experts.  Developed a website for an Small business.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline__item" data-aos="fade-right">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon"><FontAwesomeIcon icon={faStarOfLife} /></div>
                        <h6 className="timeline__item__title">
                          Graphic Design
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Arena Multimedia | Kathmandu
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="imeline__item__description">
                          Learnt the basic of graphic designing tools like photoshop, illustraor and made some designs for the assignment.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline__item" data-aos="fade-right">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon"><FontAwesomeIcon icon={faStarOfLife} /></div>
                        <h6 className="timeline__item__title">
                          Web Programing
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          IT Training in Nepal | Kathmandu
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="imeline__item__description">
                          Learnt the php and myaql and built a real estate website as a  project.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline__item" data-aos="fade-right">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon"><FontAwesomeIcon icon={faStarOfLife} /></div>
                        <h6 className="timeline__item__title">
                          Digital Marketing
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Half tone design | Kathmandu
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="imeline__item__description">
                          Learnt  about SEO, Social Media marketting, Google Analytics and created a digital marketing portfolio.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline__item" data-aos="fade-right">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon"><FontAwesomeIcon icon={faStarOfLife} /></div>
                        <h6 className="timeline__item__title">
                          WordPress Development
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Online Courses | Internet
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="imeline__item__description">
                        Where knowledge meets convenience, and learning knows no bounds. Unlocking new skills from the comfort of your screen, empowering minds one click at a time.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
              <div className="timeline-wrapper timeline icon timeline--style-1">
                <h5 className="timeline__title" data-aos="fade-down">
                  Experience
                </h5>
                <ul>
                  <li data-aos="fade-left">
                    <div className="timeline__item">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon"><FontAwesomeIcon icon={faStarOfLife} /></div>
                        <h6 className="timeline__item__title">
                        Web designer
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          OK Nepal INC | Katamndu (2010-2011)
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="imeline__item__description">
                          Implemented what I learnt from the Arena Multimedia and gain some professional knowledge.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline__item" data-aos="fade-left">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon"><FontAwesomeIcon icon={faStarOfLife} /></div>
                        <h6 className="timeline__item__title">
                          Web Designer
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          CrossOver Nepal | Kupondole (2011-2017)
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="imeline__item__description">
                          Started as a junior web designer and promoted upto project manager. Had a great experience over here.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline__item" data-aos="fade-left">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon"><FontAwesomeIcon icon={faStarOfLife} /></div>
                        <h6 className="timeline__item__title">
                          Sr. Web developer
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          8848 Webs | Jwagal (2017-2019)
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="imeline__item__description">
                          Built some large scale ecommerce site and managed projects too and mentored the junior designers also.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline__item" data-aos="fade-left">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon"><FontAwesomeIcon icon={faStarOfLife} /></div>
                        <h6 className="timeline__item__title">
                        CTO and Project Manager
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                        Murphys Technology | Sankhamul (2019-2021)
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="imeline__item__description">
                        Handled the company’s online presence – regularly updated the company’s website and various social media accounts.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline__item" data-aos="fade-left">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon"><FontAwesomeIcon icon={faStarOfLife} /></div>
                        <h6 className="timeline__item__title">
                        WordPress Developer
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                        CodePixelz Media | Ekantakuna (2021-present)
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="imeline__item__description">
                        WordPress developer, Theme development and customization, FSE, Gutenberg, React, Frontend developer.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EducationExperience;
