import React  from "react";
import Link from "next/link";
function SectionTags (props) {
  return (
    <>
    <div className="container mx-auto mb-10">
    <div className="tags-wrapper">
      
    <ul className="flex ul-tags gap-5">
          <li>
            <Link href={"/"}>Web development</Link>
          </li>
          <li>
            <Link href={"/"}>Web design</Link>
          </li>
            
          <li>
            <Link href={"/"}>Open AI</Link>
          </li>
          <li>
            <Link href={"/"}>ChatGPT</Link>
          </li>
        </ul>
      </div>
    </div>
    
    </>
  )
}
export default SectionTags;