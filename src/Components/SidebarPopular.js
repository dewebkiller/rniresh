import React from "react";
import Thumbnail from "../images/blogsingle.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
function SidebarPopular() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-wrapper mt-8">
          <h5>Popular Posts</h5>
          <ul>
            <li>
                <div className="sidebar-content">
                  <h6>How to create a website in HTML5?</h6>
                  <div className="date">
                    <FontAwesomeIcon icon={faCalendar} color="#9e9e9e" size="sm" />{" "}
                    10 Jan, 2021
                  </div>
                </div>
            </li>
            <li>
                <div className="thumbnail-wrapper">
                  <img src={Thumbnail} alt="" />
                </div>
                <div className="sidebar-content">
                  <h6>How to create a website in HTML5?</h6>
                  <div className="date">
                    <FontAwesomeIcon icon={faCalendar} color="#9e9e9e" size="sm" />{" "}
                    10 Jan, 2021
                  </div>
                </div>
            </li>
            <li>
                <div className="thumbnail-wrapper">
                  <img src={Thumbnail} alt="" />
                </div>
                <div className="sidebar-content">
                  <h6>How to create a website in HTML5?</h6>
                  <div className="date">
                    <FontAwesomeIcon icon={faCalendar} color="#9e9e9e" size="sm" />{" "}
                    10 Jan, 2021
                  </div>
                </div>
            </li>
            <li>
                <div className="thumbnail-wrapper">
                  <img src={Thumbnail} alt="" />
                </div>
                <div className="sidebar-content">
                  <h6>How to create a website in HTML5?</h6>
                  <div className="date">
                    <FontAwesomeIcon icon={faCalendar} color="#9e9e9e" size="sm" />{" "}
                    10 Jan, 2021
                  </div>
                </div>
            </li>
            <li>
                <div className="thumbnail-wrapper">
                  <img src={Thumbnail} alt="" />
                </div>
                <div className="sidebar-content">
                  <h6>How to create a website in HTML5?</h6>
                  <div className="date">
                    <FontAwesomeIcon icon={faCalendar} color="#9e9e9e" size="sm" />{" "}
                    10 Jan, 2021
                  </div>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default SidebarPopular;
