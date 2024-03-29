import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const dewebkiller = "https://dewebkiller.com";
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="main-header">
        <nav className="border-gray-200 dark:border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto float-right">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isNavOpen ? "true" : "false"}
              onClick={toggleNav}
            >
              <span className="sr-only">Toggle navigation</span>
              {isNavOpen ? (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>

            <div
              className={`${
                isNavOpen ? "block mobilemenu" : "hidden"
              } w-full md:block md:w-auto`}
              id="navbar-default"
            >
              <ul className="flex flex-col font-medium mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                  <NavLink to={"/"} activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li>
                <NavLink to={"/About"} activeClassName="active">
                  About
                </NavLink>
                </li>
                <li>
                <NavLink to={"/Services"} activeClassName="active">
                  Services
                </NavLink>
                </li>
                <li>
                <NavLink to={"/Portfolio"} activeClassName="active">
                  Portfolio
                </NavLink>
                </li>
                
                <li>
                  <a href={dewebkiller} target="_blank" rel="noreferrer">
                  Blog
                </a>
                </li>
                <li>
                <NavLink to={"/Contact"} activeClassName="active">
                  Contact
                </NavLink>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
