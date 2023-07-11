import React from "react";
import Sidebar from "../components/Sidebar";
import TopPanel from "../components/TopPanel";

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
