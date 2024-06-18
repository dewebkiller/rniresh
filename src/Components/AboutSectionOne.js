import React  from "react";
import ButtonComp from  './ButtonComp';
function AboutSectionOne (props) {
  const Btntext = "Download CV";
  const FAicon =  "fa-download";
  const Hireme = "Hire me";
  const Hireicon =  "fa-envelope";
  return (
    <>
    <div className="container mx-auto py-20 main-content">
    <div className="md:grid md:grid-cols-12 md:gap-6">
      
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
        <h4>Creating Outstanding Design to Boost Your Digital Experience.</h4>
        </div>
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
        <p>I am a freelance WordPress developer based on chandragiri, Kathmandu focusing in producing websites that are both user friendly and eye catchy which can grow with your business and brand. With my 10+ years of web design and development experience and working with international and most well-known brands, I use this knowledge to provide high quality web solutions to all my clients.</p>
        <div className="page-titles-wrap  btn-wrapper">
            <ButtonComp Btntext={Btntext} FAicon={FAicon}/>
            <ButtonComp Btntext={Hireme} FAicon={Hireicon}/>
            </div>
        
        </div>
      
      </div>
    </div>
    
    </>
  )
}
export default AboutSectionOne;