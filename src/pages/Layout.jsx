import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import TopPanel from "../components/TopPanel/TopPanel";

function Layout() {
  return (
    <>
      <Sidebar />
      <div className="right-col">
        <TopPanel />
        <main>Content here</main>
      </div>
    </>
  );
}

export default Layout;
