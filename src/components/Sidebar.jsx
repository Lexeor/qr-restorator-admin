import React from "react";

function Sidebar() {
  return (
    <aside>
      <div className="sidebar-logo">Logo</div>
      <div className="sidebar-items-wrapper">
        <ul>
          <li>
            <i class="ri-dashboard-line"></i>Dashboard
          </li>
          <li className="active">
            <i className="ri-layout-grid-fill"></i>Tables
          </li>
          <li>
            <i className="ri-draft-line"></i>Menu
          </li>
          <li>
            <i className="ri-file-chart-line"></i>Reports
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
