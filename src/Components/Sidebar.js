import React from "react";
import SidebarRecent from "./SidebarRecent";
import SidebarPopular from "./SidebarPopular";
function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <SidebarRecent />
        <SidebarPopular />
      </div>
    </>
  );
}
export default Sidebar;
