'use client';

import React, { useState, useEffect } from "react";
import nireshshrestha from "../images/niresh-shrestha-profile.png";
import nireshlogo from "../images/niresh.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";

const getSrc = (img) => typeof img === 'string' ? img : (img?.src || img);

function Header() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.pageYOffset : 0;
    const handleScroll = () => {
      if (window.pageYOffset > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY = window.pageYOffset;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
  }, []);
  return (
    <header className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          className={`absolute dwk-header-top py-8 ${showHeader ? "show" : "hide"}`}
        >
          <div className="container md:grid md:grid-cols-12 md:gap-6">
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 logo-wrapper">
              <div className="site-logo">
                <img
                  src={getSrc(nireshlogo)}
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
            <b>Does Your Website Stand Out When Customers Search?</b>
            <p>
              I build websites that load fast, follow the latest SEO best
              practices, <br /> and guide users smoothly through your content.{" "}
              <br /> I focus on creating a digital experience designed <br /> to
              connect with visitors not just a pretty page nobody sees.
            </p>{" "}
            <br />
          </div>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "WordPress Developer",
                  "Frontend Developer",
                  "UI/UX Designer",
                  "Problem Solver",
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
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
        <div className="md:h-[37rem] h-96">
          <img
            src={getSrc(nireshshrestha)}
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
