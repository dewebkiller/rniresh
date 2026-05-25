import React from "react";
import ButtonComp from "./ButtonComp";
function AboutSectionOne(props) {
  const Btntext = "Download CV";
  const FAicon = "fa-download";
  const Hireme = "Hire me";
  const Hireicon = "fa-envelope";
  return (
    <>
      <div className="container mx-auto py-20 main-content">
        <div className="md:grid md:grid-cols-12 md:gap-6">
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
            <h1>
              <span className="text-4xl">Who is</span> Niresh Shrestha
            </h1>
            <h3 className="text-2xl text-[#ef6c98] ">
              {" "}
              Freelance WordPress Developer and complex problem solver
            </h3>
          </div>
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
            <p>
              I am a freelance WordPress developer based on Kathmandu. I focus
              on producing websites that are both user friendly and eye catchy
              which can grow with your business and brand. With my 10+ years of
              web design and development experience and working with
              international and most well-known brands, I use this knowledge to
              provide high quality web solutions to all my clients.
            </p>
            <div className="page-titles-wrap  btn-wrapper">
              <ButtonComp Btntext={Btntext} FAicon={FAicon} />
              <ButtonComp Btntext={Hireme} FAicon={Hireicon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutSectionOne;
