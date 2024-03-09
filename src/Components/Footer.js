import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const currentYear = new Date().getFullYear();
  const facebook = "https://www.facebook.com/dewebkiller";
  library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub);
  return (
    <section className="min-h-fit footer-section py-6 bg-dark_primary">
      <div className="container mx-auto">
        <footer className="p-3 text-center text-white">
          <ul className="flex gap-5 justify-center mb-3 social-icons">
            <li>
              <Tooltip title="Facebook" arrow placement="top">
                <Link to={facebook} target="_blank">
                  <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                </Link>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Instagram" arrow placement="top">
                <Link to={facebook} target="_blank">
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </Link>
              </Tooltip>
            </li>
            
            <li>
            <Tooltip title="Linkedin" arrow placement="top">
                <Link to={facebook} target="_blank">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </Link>
              </Tooltip>  
            </li>
            <li>
            <Tooltip title="Linkedin" arrow placement="top">
                <Link to={facebook} target="_blank">
                <FontAwesomeIcon icon="fa-brands fa-github" />
                </Link>
              </Tooltip>
            </li>
            <li>
            <Tooltip title="Twitter" arrow placement="top">
                <Link to={facebook} target="_blank">
                <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
                </Link>
              </Tooltip>
            </li>
            <li>
            <Tooltip title="Dribble" arrow placement="top">
                <Link to={facebook} target="_blank">
                <FontAwesomeIcon icon="fa-brands fa-dribbble" />
                </Link>
              </Tooltip>
            </li>
            <li>
            <Tooltip title="Pinterest" arrow placement="top">
                <Link to={facebook} target="_blank">
                <FontAwesomeIcon icon="fa-brands fa-pinterest-p" />
                </Link>
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
