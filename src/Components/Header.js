import React, { useState, useEffect } from "react";
import nireshshrestha from "../images/niresh-shrestha-profile.png";
import nireshlogo from "../images/niresh.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  let lastScrollY = window.pageYOffset;

  const handleScroll = () => {
    if (window.pageYOffset > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    lastScrollY = window.pageYOffset;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    AOS.init({
      disable: 'mobile',
    });
  }, []);
  return (
    <header className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
      <div className={`absolute dwk-header-top py-8 ${showHeader ? 'show' : 'hide'}`}>
        <div className="container md:grid md:grid-cols-12 md:gap-6">
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 logo-wrapper">
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
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 navbar-wrapper">
          <Navbar />
          </div>
        </div>
        </div>
     
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute rotate-90 absolute top-[20%] right-[-15%] text-[#EAF2FA] lg:top-[40%]">
            Niresh <span className="text-dark_primary">Shrestha</span>
          </h1>
        </div>
        <div data-aos="fade-down" className="pb-40 px-6 pt-5">
          <div className="columns-1">
            <p>
              I design and develop services for customers of all sizes,
              <br /> specializing in creating stylish, modern websites, web
              services and online stores.
            </p>{" "}
            <br />
          </div>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "WordPress Developer",
                  "Content Writer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>{" "}
          <br />
          <div className="flex">
            <button className="btn">More About Me</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            <div
              data-aos="fade-down"
              data-aos-delay="0"
              className="flex items-center w-80 gap-5 false"
            >
              <h3>15+</h3>
              <p>Years of Experience in Web development</p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="300"
              className="flex items-center w-80 gap-5 flex-row-reverse text-right"
            >
              <h3>200+</h3>
              <p>Projects Worked in my career</p>
            </div>
          </div>
        </div>
        <div className="md:h-[37rem] h-96">
          <img
            src={nireshshrestha}
            alt="Freelance WordPress Developer"
            className="h-full object-cover"
            data-aos="slide-up"
            data-aos-delay="600"
          />
        </div>
      </div>
    </header>
  );
}
export default Header;
