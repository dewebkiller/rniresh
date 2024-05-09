import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import nireshtestimonial from "../images/niresh-testimonials.png";
import "swiper/css";
import "swiper/css/navigation";

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
          <img src={nireshtestimonial} alt="My Skills" className="h-full object-cover testimonial-image" data-aos="fade-left"/> 
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
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  Niresh is an awesome web designer! He is easy to work with and
                  very detail oriented. He made my website look amazing and very
                  user friendly for my clients! Highly appreciated his work.
                  <h5>Uttam K. Shrestha</h5>
                </SwiperSlide>
                <SwiperSlide>
                  I have been connected with Niresh since very beginning. He
                  gives best services ever even after the office hours in an
                  efficient manner.
                  <h5>Deepesh Mali</h5>
                </SwiperSlide>
                <SwiperSlide>
                  I must say Niresh provides the excellent web designing
                  services. This guy is so amazing he designed my website so
                  well.
                  <h5>Deevesh Thakur</h5>
                </SwiperSlide>
                <SwiperSlide>
                  I must say Niresh provides the excellent web designing
                  services. This guy is so amazing he designed my website so
                  well.
                  <h5>Deevesh Thakur</h5>
                </SwiperSlide>
                ...
              </Swiper>
    </div>
  </div>
      </div>
     </div>
    
    </section>
  );
};
export default Testimonial;
