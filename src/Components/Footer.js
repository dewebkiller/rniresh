import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="min-h-fit footer-section py-6 bg-dark_primary">
      <div className="container mx-auto">
      <footer className="p-3 text-center text-white">
        <h6 class="mb-3 text-white">Niresh Shrestha</h6>
        <ul class="flex flex-wrap justify-center">
          <li class="dark:text-gray-400">
            <a href="#">
            <FontAwesomeIcon icon={['fab', 'apple']} />
            </a></li>
          <li class="dark:text-gray-400">16 oct, 2023</li>
          </ul>
        <p> © All Reserved {currentYear}.</p>
        <a href="#"><p>Privacy Policy</p></a>
        </footer>
        </div>
    </section>
  );
}
export default Footer;
