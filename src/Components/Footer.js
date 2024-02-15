import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="min-h-fit footer-section py-6 bg-dark_primary">
      <div className="container mx-auto">
      <footer className="p-3 text-center text-white">
        <h6 className="mb-3 text-white">Niresh Shrestha</h6>
        <ul className="flex flex-wrap justify-center">
          </ul>
        <p> &copy; {currentYear}. All Rights Reserved.</p>
        <a href="#"><p>Privacy Policy</p></a>
        </footer>
        </div>
    </section>
  );
}
export default Footer;
