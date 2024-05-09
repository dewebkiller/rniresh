
import nireshhire from "../images/niresh-hireme.png";
import { Link } from "react-router-dom";

export const Hireme = () => {
  return (
    <section className="min-h-fit bg-bg_light_primary hire-section">
     <div className="container mx-auto">
     <div className="px-5 pt-20">
      <div className="md:grid md:grid-cols-12 md:gap-6">
    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-8 lg:col-span-8">
    <div className="text-left md:grid md:grid-cols-12 md:gap-6">
      <div className="max-w-xl md:max-w-none md:w-full left-title-middle md:col-span-5 lg:col-span-5 md:col-span-5 lg:col-span-5 align-middle">
      <h2 className="title" data-aos="fade-down">Hire Me</h2>
          <h4 className="subtitle" data-aos="fade-down">For your project</h4>
      </div>
          <div className="right-image md:col-span-7 lg:col-span-7">
          <img src={nireshhire} alt="My Skills" className="h-full object-cover" data-aos="fade-left" width="70%"/> 
          </div>
          
        </div>
    </div>
    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-4 lg:col-span-4 testimonialmainwrapper" data-aos="fade-left">
    <div data-aos="fade-left" className="border-2 border-dark_primary max-w-sm p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem] aos-init aos-animate">
      <p className="leading-7">Experienced WordPress developer proficient in custom theme and plugin development. Let's collaborate to bring your WordPress project to life!</p>
      <br/>
      <button className="btn bg-dark_primary text-white bg-sky-500/100"><Link to={'/Contact'}>Hire Me</Link></button>
      </div>
    </div>
  </div>
      </div>
     </div>
    
    </section>
  );
};
export default Hireme;
