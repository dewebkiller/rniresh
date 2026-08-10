'use client';

import React, { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import dribbbleicon from "../images/icon-dribbble.svg";
import githubicon from "../images/icon-github.svg";
import linkedinicon from "../images/icon-linkedin.svg";
import wordpressicon from "../images/icon-wordpress.svg";

const getSrc = (img) => typeof img === 'string' ? img : (img?.src || img);

function FooterSocial() {
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.pageYOffset : 0;
    const handleScroll = () => {
      if (window.pageYOffset > lastScrollY) {
        setShowFooter(false);
      } else {
        setShowFooter(true);
      }
      lastScrollY = window.pageYOffset;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                <a href={dribble} target="_blank" rel="noreferrer" className="flex">
                  <div className="si-left">
                    <img src={getSrc(dribbbleicon)} alt="Dribbble" />
                  </div>
                  <div className="si-right">
                    <h6>Dribbble</h6>
                    <p>View my Showcase</p>
                  </div>
                </a>
              </Tooltip>
            </ListItem>
            <ListItem className="lg:col-span-3 p-3">
              <Tooltip title="GitHub" arrow placement="top">
                <a href={github} target="_blank" rel="noreferrer" className="flex">
                  <div className="si-left">
                    <img src={getSrc(githubicon)} alt="GitHub" />
                  </div>
                  <div className="si-right">
                    <h6>GitHub</h6>
                    <p>Follow me</p>
                  </div>
                </a>
              </Tooltip>
            </ListItem>
            <ListItem className="lg:col-span-3 p-3">
              <Tooltip title="WordPress" arrow placement="top">
                <a href={wordpress} target="_blank" rel="noreferrer" className="flex">
                  <div className="si-left">
                    <img src={getSrc(wordpressicon)} alt="WordPress" />
                  </div>
                  <div className="si-right">
                    <h6>WordPress</h6>
                    <p>My WP Profile</p>
                  </div>
                </a>
              </Tooltip>
            </ListItem>
            <ListItem className="lg:col-span-3 p-3">
              <Tooltip title="LinkedIn" arrow placement="top">
                <a href={linkedin} target="_blank" rel="noreferrer" className="flex">
                  <div className="si-left">
                    <img src={getSrc(linkedinicon)} alt="LinkedIn" />
                  </div>
                  <div className="si-right">
                    <h6>LinkedIn</h6>
                    <p>Connect with me</p>
                  </div>
                </a>
              </Tooltip>
            </ListItem>
          </List>
        </footer>
      </div>
    </section>
  );
}

export default FooterSocial;