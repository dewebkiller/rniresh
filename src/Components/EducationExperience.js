import React, { useEffect } from "react";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
function EducationExperience(props) {
  useEffect(() => {
    AOS.init();
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
                          UI/UX Designer
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Google INC | New York (2016-2018)
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="imeline__item__description">
                          Nulla consequat massa quis enim. Donec pede justo,
                          fringilla vel, aliquet nec, vulputate eget, arcu. In
                          enim justo.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline__item" data-aos="fade-right">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon"><FontAwesomeIcon icon={faStarOfLife} /></div>
                        <h6 className="timeline__item__title">
                          UI/UX Designer
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Google INC | New York (2016-2018)
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="imeline__item__description">
                          Nulla consequat massa quis enim. Donec pede justo,
                          fringilla vel, aliquet nec, vulputate eget, arcu. In
                          enim justo.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline__item" data-aos="fade-right">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon"><FontAwesomeIcon icon={faStarOfLife} /></div>
                        <h6 className="timeline__item__title">
                          UI/UX Designer
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Google INC | New York (2016-2018)
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="imeline__item__description">
                          Nulla consequat massa quis enim. Donec pede justo,
                          fringilla vel, aliquet nec, vulputate eget, arcu. In
                          enim justo.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline__item" data-aos="fade-right">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon"><FontAwesomeIcon icon={faStarOfLife} /></div>
                        <h6 className="timeline__item__title">
                          UI/UX Designer
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Google INC | New York (2016-2018)
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="imeline__item__description">
                          Nulla consequat massa quis enim. Donec pede justo,
                          fringilla vel, aliquet nec, vulputate eget, arcu. In
                          enim justo.
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
                          UI/UX Designer
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Google INC | New York (2016-2018)
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="imeline__item__description">
                          Nulla consequat massa quis enim. Donec pede justo,
                          fringilla vel, aliquet nec, vulputate eget, arcu. In
                          enim justo.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline__item" data-aos="fade-left">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon"><FontAwesomeIcon icon={faStarOfLife} /></div>
                        <h6 className="timeline__item__title">
                          UI/UX Designer
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Google INC | New York (2016-2018)
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="imeline__item__description">
                          Nulla consequat massa quis enim. Donec pede justo,
                          fringilla vel, aliquet nec, vulputate eget, arcu. In
                          enim justo.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline__item" data-aos="fade-left">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon"><FontAwesomeIcon icon={faStarOfLife} /></div>
                        <h6 className="timeline__item__title">
                          UI/UX Designer
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Google INC | New York (2016-2018)
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="imeline__item__description">
                          Nulla consequat massa quis enim. Donec pede justo,
                          fringilla vel, aliquet nec, vulputate eget, arcu. In
                          enim justo.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline__item" data-aos="fade-left">
                      <div className="timeline__item__head mb-5">
                        <div className="timeline__item__icon"><FontAwesomeIcon icon={faStarOfLife} /></div>
                        <h6 className="timeline__item__title">
                          UI/UX Designer
                        </h6>
                        <em className="timeline__item__subtitle text-sm mb-3">
                          Google INC | New York (2016-2018)
                        </em>
                      </div>
                      <div className="timeline__item__body">
                        <p className="imeline__item__description">
                          Nulla consequat massa quis enim. Donec pede justo,
                          fringilla vel, aliquet nec, vulputate eget, arcu. In
                          enim justo.
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
