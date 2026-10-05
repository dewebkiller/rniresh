'use client';

import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faGithub,
  faWordpress
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const currentYear = new Date().getFullYear();
  const facebook = "https://www.facebook.com/dewebkiller";
  const instagram = "https://www.instagram.com/dewebkiller";
  const linkedin = "https://www.linkedin.com/in/dewebkiller/";
  const github = "https://github.com/dewebkiller";
  const twitter = "https://twitter.com/dewebkiller";
  const dribble = "https://dribbble.com/dewebkiller";
  const wordpress = "https://profiles.wordpress.org/dewebkiller/";
  library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub, faWordpress);
  return (
    <section className="min-h-fit footer-section py-6 bg-dark_primary">
      <div className="container mx-auto">
        <footer className="p-3 text-center text-white">
          <ul className="flex gap-5 justify-center mb-3 social-icons">
            <li>
              <Tooltip title="Facebook" arrow placement="top">
                <a href={facebook} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Instagram" arrow placement="top">
                <a href={instagram} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </a>
              </Tooltip>
            </li>
            
            <li>
              <Tooltip title="Linkedin" arrow placement="top">
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
              </Tooltip>  
            </li>
            <li>
              <Tooltip title="Github" arrow placement="top">
                <a href={github} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="X / Twitter" arrow placement="top">
                <a href={twitter} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
                </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Dribble" arrow placement="top">
                <a href={dribble} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon="fa-brands fa-dribbble" />
                </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="WordPress" arrow placement="top">
                <a href={wordpress} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon="fa-brands fa-wordpress" />
                </a>
              </Tooltip>
            </li>
            
          </ul>
          <h6 className="mb-3 text-white">Niresh Shrestha</h6>
          <ul className="flex flex-wrap justify-center"></ul>
          <p> &copy; {currentYear}. All Rights Reserved.</p>
        </footer>
      </div>
    </section>
  );
}
export default Footer;
