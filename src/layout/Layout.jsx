import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/Navbar";
import "./layout.scss";

function Layout() {
  return (
    <div className="layout-cont">
      <div className="lay-cont -mt-2 mb-4">
        <NavBar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
