'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import nireshtestimonial from "../images/niresh-testimonials.png";
import "swiper/css";
import "swiper/css/navigation";

const getSrc = (img) => typeof img === 'string' ? img : (img?.src || img);

export const Testimonial = () => {
  return (
    <section className="min-h-fit bg-bg_light_primary testimonial-section">
     <div className="container mx-auto">
     <div className="px-5 pt-20">
      <div className="md:grid md:grid-cols-12 md:gap-6">
    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
    <div className="text-center">
          <h2 className="title" data-aos="fade-down">Testimonials</h2>
          <h4 className="subtitle" data-aos="fade-down">Customers feedback</h4>
          <img src={getSrc(nireshtestimonial)} alt="My Skills" className="h-full object-cover testimonial-image" data-aos="fade-left"/> 
        </div>
    </div>
    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 testimonialmainwrapper" data-aos="fade-left">
              <Swiper
                className="testimonial-wrapper rounded-2xl"
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
              >
                <SwiperSlide>
                  <p>
                    "Niresh is an awesome web designer! He is easy to work with and
                    very detail oriented. He made my website look amazing and very
                    user friendly for my clients! Highly appreciated his work."
                  </p>
                  <h5>Uttam K. Shrestha</h5>
                </SwiperSlide>
                <SwiperSlide>
                  <p>
                    "I have been connected with Niresh since the very beginning. He
                    gives the best services ever even after office hours in an
                    efficient manner."
                  </p>
                  <h5>Deepesh Mali</h5>
                </SwiperSlide>
                <SwiperSlide>
                  <p>
                    "I must say Niresh provides excellent web designing
                    services. This guy is so amazing, he designed my website so
                    well and delivered on time."
                  </p>
                  <h5>Deevesh Thakur</h5>
                </SwiperSlide>
              </Swiper>
    </div>
  </div>
      </div>
     </div>
    
    </section>
  );
};
export default Testimonial;
