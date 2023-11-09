import React, { useEffect } from "react";
import profileimage from "../images/profile.png";
import nireshlogo from "../images/niresh.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

function Header() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <header className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div className="absolute dwk-header-top py-8">
        <div class="container md:grid md:grid-cols-12 md:gap-6">
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
          <div className="site-logo">
            <img
            src={nireshlogo}
            alt="Logo"
            className="h-full object-cover"
            data-aos="slide-up"
            data-aos-delay="600"
          />
          </div>
          </div>
          
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
          
      <nav class="border-gray-200 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <button type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"  data-te-target="#navbar-solid-bg" aria-controls="navbar-solid-bg" aria-expanded="false" aria-label="Toggle navigation" data-te-collapse-collapsed="">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li className="bg-transparent hover:bg-blue-500 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
          <a href="#" class="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent hover:text-white md:text-blue-700 md:p-0">Home</a>
        </li>
        <li className="bg-transparent hover:bg-blue-500 text-gray-800 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded-full">
          <a href="#" class="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0">About</a>
        </li>
        <li className="bg-transparent hover:bg-blue-500 text-gray-800 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded-full">
          <a href="#" class="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0">Services</a>
        </li>
        <li className="bg-transparent hover:bg-blue-500 text-gray-800 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded-full">
          <a href="#" class="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0">Portfolio</a>
        </li>
        <li className="bg-transparent hover:bg-blue-500 text-gray-800 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded-full">
          <a href="#" class="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0">Blog</a>
        </li>
        <li className="bg-transparent hover:bg-blue-500 text-gray-800 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded-full">
          <a href="#" class="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
          </div>
        </div>
        </div>
     
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute rotate-90 absolute top-[40%] right-[-15%] text-[#EAF2FA]">
            Niresh <span className="text-dark_primary">Shrestha</span>
          </h1>
        </div>
        <div data-aos="fade-down" className="pb-16 px-6 pt-5">
          <div class="columns-1">
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
            <button className="btn">Hire Me</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            <div
              data-aos="fade-down"
              data-aos-delay="0"
              className="flex items-center w-80 gap-5 false"
            >
              <h3>8+</h3>
              <p>Years of Experinse in Web development</p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="300"
              className="flex items-center w-80 gap-5 flex-row-reverse text-right"
            >
              <h3>20+</h3>
              <p>Projects Worked in my career</p>
            </div>
          </div>
        </div>
        <div className="md:h-[37rem] h-96">
          <img
            src={profileimage}
            alt="Logo"
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
