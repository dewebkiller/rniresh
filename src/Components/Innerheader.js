import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import nireshlogo from "../images/niresh.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import ButtonComp from  './ButtonComp';
import Breadcrumbtext1 from "./Breadcrumbtext1";
import Breadcrumbtext2 from "./Breadcrumbtext2";
import Typewriter from "typewriter-effect";

function InnerHeader(props) {
  const { pagetitle } = props;
  const Breadcrumbtextone = props.Breadcrumbtext1;
  const Breadcrumbtexttwo = props.Breadcrumbtext2;
  const Btntext = "Download CV";
  const FAicon =  "fa-download";
  const Hireme = "Hire me";
  const Hireicon =  "fa-envelope";
  const typewriterStrings = props.Typewriter;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <div className="breadcrumb-wrapper">
    <div className="page-heading">

        <div className="page-overlay"></div>
        <div className="px-5 py-8 inner-header-wrapper">
        <div className="container mx-auto">
  
        <div className="md:grid md:grid-cols-12 md:gap-6">
      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
      <div className="site-logo">
            <img
            src={nireshlogo}
            alt="Logo"
            className="h-full object-cover"
            data-aos="fade-down"
            data-aos-delay="300"
          />
          </div>
      </div>
      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 float-right">
        <Navbar />
      </div>
    </div>
  </div>
   
  </div>

        <div className="container flex flex-wrap justify-between mx-auto">
            <div className="page-titles-wrap">

                <Breadcrumbtext1 Breadcrumbtext1 ={Breadcrumbtextone} />

                <Breadcrumbtext2 Breadcrumbtext2 = {Breadcrumbtexttwo} />
                <h2 className="page-title"> 
                <Typewriter
                  options={{
                    strings: typewriterStrings,
                    autoStart: true,
                    loop: true,
                  }}
                />
                </h2>
                
            </div>
            <div className="page-titles-wrap text-white btn-wrapper">
            <ButtonComp Btntext={Btntext} FAicon={FAicon}/>
            <ButtonComp Btntext={Hireme} FAicon={Hireicon}/>
            </div>
        </div>
        <div className="breadcrumbs ">
            <div className="container flex flex-wrap mx-auto">
                <div className="breadcrumb">
                <Link to={'/'}> <span className="home">Home</span></Link>
                    <span><span>{pagetitle}</span></span>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
    
  );
}
export default InnerHeader;
