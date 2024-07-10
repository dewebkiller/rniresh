import React, { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from "react-router-dom";
import dribbbleicon from "../images/icon-dribbble.svg";
import githubicon from "../images/icon-github.svg";
import linkedinicon from "../images/icon-linkedin.svg";
import wordpressicon from "../images/icon-wordpress.svg";

function FooterSocial() {
  const [showFooter, setShowFooter] = useState(true);
  let lastScrollY = window.pageYOffset;

  const handleScroll = () => {
    if (window.pageYOffset > lastScrollY) {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
    lastScrollY = window.pageYOffset;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const linkedin = "https://www.linkedin.com/in/dewebkiller/";
  const github = "https://github.com/dewebkiller";
  const dribble = "https://dribbble.com/dewebkiller";
  const wordpress = "https://profiles.wordpress.org/dewebkiller/";

  return (
    <section className={`footer-social-section py-1 bg-bg_light_primary ${showFooter ? 'show' : 'hide'}`}>
      <div className="container mx-auto">
        <footer className="p-1 text-center">
          <List className="flex">
            <ListItem className="lg:col-span-3 p-3">
              <Tooltip title="Dribbble" arrow placement="top">
                <Link to={dribble} target="_blank" className="flex">
                  <div className="si-left">
                    <img src={dribbbleicon} alt="Dribbble" />
                  </div>
                  <div className="si-right">
                    <h6>Dribbble</h6>
                    <p>View my Showcase</p>
                  </div>
                </Link>
              </Tooltip>
            </ListItem>
            <ListItem className="lg:col-span-3 p-3">
              <Tooltip title="GitHub" arrow placement="top">
                <Link to={github} target="_blank" className="flex">
                  <div className="si-left">
                    <img src={githubicon} alt="GitHub" />
                  </div>
                  <div className="si-right">
                    <h6>GitHub</h6>
                    <p>Follow me</p>
                  </div>
                </Link>
              </Tooltip>
            </ListItem>
            <ListItem className="lg:col-span-3 p-3">
              <Tooltip title="WordPress" arrow placement="top">
                <Link to={wordpress} target="_blank" className="flex">
                  <div className="si-left">
                    <img src={wordpressicon} alt="WordPress" />
                  </div>
                  <div className="si-right">
                    <h6>WordPress</h6>
                    <p>My WP Profile</p>
                  </div>
                </Link>
              </Tooltip>
            </ListItem>
            <ListItem className="lg:col-span-3 p-3">
              <Tooltip title="LinkedIn" arrow placement="top">
                <Link to={linkedin} target="_blank" className="flex">
                  <div className="si-left">
                    <img src={linkedinicon} alt="LinkedIn" />
                  </div>
                  <div className="si-right">
                    <h6>LinkedIn</h6>
                    <p>Connect with me</p>
                  </div>
                </Link>
              </Tooltip>
            </ListItem>
          </List>
        </footer>
      </div>
    </section>
  );
}

export default FooterSocial;