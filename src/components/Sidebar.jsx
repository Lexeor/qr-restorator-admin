import React from "react";

function Sidebar() {
  return (
    <aside>
      <div className="sidebar-logo">Logo</div>
      <div className="sidebar-items-wrapper">
        <ul>
          <li>
            <i className="ri-dashboard-line"></i>Dashboard
          </li>
          <li className="active">
            <i className="ri-layout-grid-fill"></i>Tables
          </li>
          <li>
            <i className="ri-restaurant-fill"></i>Menu
          </li>
          <li>
            <i className="ri-file-chart-line"></i>Reports
          </li>
          <li>
            <i className="ri-store-3-line"></i>Restaurant
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
