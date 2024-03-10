import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const dewebkiller = "https://dewebkiller.com";
  return (
    <>
      <div className="main-header">
        <nav className="border-gray-200 dark:border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 float-right">
            
            <button data-collapse-toggle="navbar-default" type="button" class="iinline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
            
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="flex flex-col font-medium mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                <Link to={"/"}>
                  {" "}
                  <li>Home</li>
                </Link>
                <Link to={"/About"}>
                  {" "}
                  <li>About</li>
                </Link>
                <Link to={"/Services"}>
                  {" "}
                  <li>Services</li>
                </Link>
                <Link to={"/Portfolio"}>
                  {" "}
                  <li>Portfolio</li>
                </Link>
                <Link to={dewebkiller} target="_blank">
                  {" "}
                  <li>Blog</li>
                </Link>
                <Link to={"/Contact"}>
                  {" "}
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
