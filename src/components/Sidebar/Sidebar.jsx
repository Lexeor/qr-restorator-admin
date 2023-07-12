import React from "react";
import MenuItems from "./MenuItems";

function Sidebar() {
  return (
    <aside>
      <div className="sidebar-logo">Logo</div>
      <MenuItems />
    </aside>
  );
}

export default Sidebar;
