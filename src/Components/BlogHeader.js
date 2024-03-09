import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import dotimage from "../images/dots-5.png";
import nireshlogo from "../images/niresh.svg";
import AOS from "aos";
import "aos/dist/aos.css";

import Breadcrumbtext1 from "./Breadcrumbtext1";
import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";

function BlogHeader(props) {
  const { pagetitle } = props;
  const Breadcrumbtextone = props.Breadcrumbtext1;
  const typewriterStrings = props.Typewriter;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <header className="overflow-hidden style2-breadcrumb-wrapper">
      <div className="flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div className="absolute dwk-header-top py-8">
        <div className="container md:grid md:grid-cols-12 md:gap-6">
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
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
          <Navbar />
          </div>
        </div>
        </div>
     <div className="container mx-auto pb-20 mx-auto">
      <div className="md:grid md:grid-cols-12 md:gap-6">
      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-7 style2-breadcrumb">
        <div data-aos="fade-down" className="pb-16 px-6 pt-5">
          <div className="columns-1">
          <Breadcrumbtext1 Breadcrumbtext1 ={Breadcrumbtextone} />

          </div>
          <h2 className="page-title"> 
                <Typewriter
                  options={{
                    strings: typewriterStrings,
                    autoStart: true,
                    loop: true,
                  }}
                />
                </h2>
                
          <br />
          
          <div className="flex">
          <div className="breadcrumbs breadcrumb-style2  bg-primaryLinear">
            <div className="container flex flex-wrap mx-auto">
                <div className="breadcrumb">
                <Link to={'/'}> <span className="home">Home</span></Link>
                <Link to={'/Blog'}> <span>Blog</span></Link>
                <span>{pagetitle}</span>
                </div>
            </div>
        </div>
            
          </div>
         
        </div>
        
        </div>
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-5 z-50">
        <div className="flex flex-col gap-10 mt-10 style2-centerimage">
            <img src={dotimage} alt="" className="h-full object-cover"
            data-aos="slide-up"
            data-aos-delay="600"/>
          </div>
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-3/5 md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear -z-10 s2-breadcrumb-border"
        >
          <h1 className="rotate-90 absolute rotate-90 absolute top-[40%] right-[-15%] text-[#EAF2FA]">
            Niresh's <span className="text-dark_primary">Blog</span>
          </h1>
        </div>
        
        </div>
        
      </div>
     
        
     </div>

      </div>
    </header>
    </>
  );
}
export default BlogHeader;
