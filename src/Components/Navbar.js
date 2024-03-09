import React  from "react";
import { Link } from "react-router-dom";
function Navbar () {
  const dewebkiller = "https://dewebkiller.com";
  return (
    
    <>
    <div className="main-header">
    <nav className="border-gray-200 dark:border-gray-700">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 float-right">
    <button type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"  data-te-target="#navbar-solid-bg" aria-controls="navbar-solid-bg" aria-expanded="false" aria-label="Toggle navigation" data-te-collapse-collapsed="">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
  
    <Link to={'/'}> <li>Home</li></Link>
     <Link to={'/About'}> <li>About</li></Link>
     <Link to={'/Services'}> <li>Services</li></Link>
     <Link to={'/Portfolio'}> <li>Portfolio</li></Link>
     <Link to={dewebkiller} target="_blank"> <li>Blog</li></Link>
     <Link to={'/Contact'}> <li>Contact</li></Link>
    </ul>
    </div>
    </div>
    </nav>
    
  </div>
    </>
  )
}
export default Navbar;