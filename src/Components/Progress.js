import Tooltip from '@mui/material/Tooltip';
import html5 from "../images/html5.png";
import css3 from "../images/css3.png";
import bootstrap from "../images/bootstrap.png";
import tailwind from "../images/tailwind.png";
import jquery from "../images/jquery.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import sass from "../images/sass.png";
import git from "../images/git.png";
import wordpress from "../images/wordpress.png";
import woocommerce from "../images/woocommerce.png";
import php from "../images/php.png";
import photoshop from "../images/photoshop.png";
import adobexd from "../images/adobe-xd.png";
import figma from "../images/figma.png";
import illustrator from "../images/illustrator.png";


function Progress () {
  return (
   <section className="container relative overflow-hidden mx-auto px-4 sm:px-6">
<div className="px-5 py-20">
<div className="flex flex-wrap gap-4 justify-center mb-10">
          <div className="text-center">
            <h2 className="title" data-aos="fade-down">
              Skills
            </h2>
            <h4 className="subtitle" data-aos="fade-down">
            My Experience Area
            </h4>
          </div>
        </div>
  <div className="md:grid md:grid-cols-12 md:gap-6">
    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">

    <div className="flex items-center flex-wrap max-w-md px-10 bg-white shadow-3xl rounded-2xl h-20 my-20" data-aos="fade-right" data-aos-delay="200">
          <div className="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full"> 
            <div className="dwk-progressbar">
              <div role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{"--value": "90"}}></div> 
            </div>
          </div>
          <div className="progress-content">
          <p className="ml-10 font-medium text-gray-600 sm:text-xl">WordPress Development </p><em className="ml-10 text-gray-600 text-xs">Theme, Customization, Plugin</em>
          </div>
          
      </div>

      <div className="flex items-center flex-wrap max-w-md px-10 bg-white shadow-3xl rounded-2xl h-20 my-20" data-aos="fade-right" data-aos-delay="400">
          <div className="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full"> 
            <div className="dwk-progressbar">
              <div role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{"--value": "95"}}></div> 
            </div>
          </div>
          <div className="progress-content">
          <p className="ml-10 font-medium text-gray-600 sm:text-xl">Frontend Development</p> 
          <em className="ml-10 text-gray-600 text-xs">React, CSS3, jQuery, Sass</em>
          </div>
          
      </div>

      <div className="flex items-center flex-wrap max-w-md px-10 bg-white shadow-3xl rounded-2xl h-20 my-20" data-aos="fade-right" data-aos-delay="600">
          <div className="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full"> 
            <div className="dwk-progressbar">
              <div role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{"--value": "85"}}></div> 
            </div>
          </div>
          <div className="progress-content">
          <p className="ml-10 font-medium text-gray-600 sm:text-xl">Digital Marketing</p>
          <em className="ml-10 text-gray-600 text-xs">SEO, Content Writting</em>
          </div>
          
      </div>

      <div className="flex items-center flex-wrap max-w-md px-10 bg-white shadow-3xl rounded-2xl h-20 my-20" data-aos="fade-right" data-aos-delay="900">
          <div className="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full"> 
            <div className="dwk-progressbar">
              <div role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{"--value": "85"}}></div> 
            </div>
          </div>
          <div className="progress-content">
          <p className="ml-10 font-medium text-gray-600 sm:text-xl">Graphic Design</p>
          <em className="ml-10 text-gray-600 text-xs">Logo, Branding, Email marketing templates</em>
          </div>
      </div>
      
    </div>
    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 my-20" data-aos="fade-left" data-aos-delay="500">
    <p className="leading-7">
    I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.
                </p>
     {/* <img src={progressimage} alt="My Skills" className="h-full object-cover" />  */}
     <ul className="skills__items my-20">
      <li className="skills__item has-tooltip" data-aos="fade-up" data-aos-delay="500">
      <Tooltip title="HTML5" arrow placement="top">
        <div className="skills__item__icon">
        <img src={html5} alt="HTML5" />
        </div>
        </Tooltip>
      </li>
      <li className="skills__item has-tooltip" data-aos="fade-up" data-aos-delay="500">
      <Tooltip title="CSS3" arrow placement="top">
        <div className="skills__item__icon">
        <img src={css3} alt="CSS3" />
        </div>
        </Tooltip>
      </li>
      <li className="skills__item has-tooltip" data-aos="fade-up" data-aos-delay="500">
      <Tooltip title="Bootstrap" arrow placement="top">
        <div className="skills__item__icon">
        <img src={bootstrap} alt="bootstrap" />
        </div>
        </Tooltip>
      </li>
      <li className="skills__item has-tooltip" data-aos="fade-up" data-aos-delay="500">
      <Tooltip title="tailwind" arrow placement="top">
        <div className="skills__item__icon">
        <img src={tailwind} alt="tailwind css" />
        </div>
        </Tooltip>
      </li>
      <li className="skills__item has-tooltip" data-aos="fade-up" data-aos-delay="500">
      <Tooltip title="jQuery" arrow placement="top">
        <div className="skills__item__icon">
        <img src={jquery} alt="jQuery" />
        </div>
        </Tooltip>
      </li>
      <li className="skills__item has-tooltip" data-aos="fade-up" data-aos-delay="500">
      <Tooltip title="javascript" arrow placement="top">
        <div className="skills__item__icon">
        <img src={javascript} alt="javascript" />
        </div>
        </Tooltip>
      </li>
      <li className="skills__item has-tooltip" data-aos="fade-up" data-aos-delay="500">
      <Tooltip title="react" arrow placement="top">
        <div className="skills__item__icon">
        <img src={react} alt="react" />
        </div>
        </Tooltip>
      </li>
      <li className="skills__item has-tooltip" data-aos="fade-up" data-aos-delay="500">
      <Tooltip title="sass" arrow placement="top">
        <div className="skills__item__icon">
        <img src={sass} alt="sass" />
        </div>
        </Tooltip>
      </li>
      <li className="skills__item has-tooltip" data-aos="fade-up" data-aos-delay="500">
      <Tooltip title="GIT (Github)" arrow placement="top">
        <div className="skills__item__icon">
        <img src={git} alt="GIT (Github)" />
        </div>
        </Tooltip>
      </li>
      <li className="skills__item has-tooltip" data-aos="fade-up" data-aos-delay="500">
      <Tooltip title="wordpress" arrow placement="top">
        <div className="skills__item__icon">
        <img src={wordpress} alt="wordpress" />
        </div>
        </Tooltip>
      </li>
      <li className="skills__item has-tooltip" data-aos="fade-up" data-aos-delay="500">
      <Tooltip title="woocommerce" arrow placement="top">
        <div className="skills__item__icon">
        <img src={woocommerce} alt="woocommerce" />
        </div>
        </Tooltip>
      </li>
      <li className="skills__item has-tooltip" data-aos="fade-up" data-aos-delay="500">
      <Tooltip title="php" arrow placement="top">
        <div className="skills__item__icon">
        <img src={php} alt="php" />
        </div>
        </Tooltip>
      </li>
      <li className="skills__item has-tooltip" data-aos="fade-up" data-aos-delay="500">
      <Tooltip title="photoshop" arrow placement="top">
        <div className="skills__item__icon">
        <img src={photoshop} alt="photoshop" />
        </div>
        </Tooltip>
      </li>
      <li className="skills__item has-tooltip" data-aos="fade-up" data-aos-delay="500">
      <Tooltip title="illustrator" arrow placement="top">
        <div className="skills__item__icon">
        <img src={illustrator} alt="illustrator" />
        </div>
        </Tooltip>
      </li>
      <li className="skills__item has-tooltip" data-aos="fade-up" data-aos-delay="500">
      <Tooltip title="figma" arrow placement="top">
        <div className="skills__item__icon">
        <img src={figma} alt="figma" />
        </div>
        </Tooltip>
      </li>
      <li className="skills__item has-tooltip" data-aos="fade-up" data-aos-delay="500">
      <Tooltip title="adobexd" arrow placement="top">
        <div className="skills__item__icon">
        <img src={adobexd} alt="adobexd" />
        </div>
        </Tooltip>
      </li>
  
     </ul>
    </div>
  </div>
</div>
</section> 
  )
} 
export default Progress;