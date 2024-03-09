import React  from "react";
import { Link } from "react-router-dom";
function SectionTags (props) {
  return (
    <>
    <div className="container mx-auto mb-10">
    <div className="tags-wrapper">
      
    <ul className="flex ul-tags gap-5">
          <li>
            <Link to={"/"}>Web development</Link>
          </li>
          <li>
            <Link to={"/"}>Web design</Link>
            </li>
            
          <li>
          <Link to={"/"}>Open AI</Link>
          </li>
          <li>
          <Link to={"/"}>ChatGPT</Link>
          </li>
        </ul>
      </div>
    </div>
    
    </>
  )
}
export default SectionTags;