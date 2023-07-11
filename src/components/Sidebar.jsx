import React from "react";

function Sidebar() {
  return (
    <aside>
      <div className="sidebar-logo">Logo</div>
      <div className="sidebar-items-wrapper">
        <ul>
          <li>Dashboard</li>
          <li>Tables</li>
          <li>Menu</li>
          <li>Reports</li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
